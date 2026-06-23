package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/jackc/pgx/v5/stdlib"
	"github.com/rs/cors"
)

var db *sql.DB

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Name     string `json:"name,omitempty"`
	Points   int    `json:"points"`
}

type LoginResponse struct {
	Token   string `json:"token,omitempty"`
	Message string `json:"message,omitempty"`
	Name    string `json:"name,omitempty"`
	Email   string `json:"email,omitempty"`
	Points  int    `json:"points"`
}

type LeaderboardUser struct {
	Name   string `json:"name"`
	Points int    `json:"puncte"`
}

type UpdatePointsRequest struct {
	Email  string `json:"email"`
	Points int    `json:"points"`
}

func initDB() {
	var err error
	connStr := "postgresql://postgres.vrypvwitmuqhyttsbupk:Proiectcolectiv1@aws-1-eu-central-1.pooler.supabase.com:5432/postgres"

	db, err = sql.Open("pgx", connStr)
	if err != nil {
		log.Fatal("Eroare la DB:", err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal("Nu se poate conecta la DB:", err)
	}

	fmt.Println("🚀 Conectat la PostgreSQL!")
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		json.NewEncoder(w).Encode(LoginResponse{Message: "Metoda nesuportata"})
		return
	}

	var req LoginRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(LoginResponse{Message: "Date invalide"})
		return
	}

	var dbPassword, dbName string
	var dbPoints int
	query := "SELECT password, name, points FROM users WHERE email = $1"
	err = db.QueryRow(query, req.Email).Scan(&dbPassword, &dbName, &dbPoints)

	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(LoginResponse{Message: "Email sau parolă incorectă!"})
		return
	}

	if req.Password == dbPassword {
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(LoginResponse{
			Token:  "token-secret-de-test-12345",
			Name:   dbName,
			Email:  req.Email,
			Points: dbPoints,
		})
		return
	}

	w.WriteHeader(http.StatusUnauthorized)
	json.NewEncoder(w).Encode(LoginResponse{Message: "Email sau parolă incorectă!"})
}

func registerHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		json.NewEncoder(w).Encode(LoginResponse{Message: "Metoda nesuportata"})
		return
	}

	var req LoginRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(LoginResponse{Message: "Date invalide"})
		return
	}

	query := "INSERT INTO users (email, password, name) VALUES ($1, $2, $3)"
	_, err = db.Exec(query, req.Email, req.Password, req.Name)

	if err != nil {
		w.WriteHeader(http.StatusConflict)
		json.NewEncoder(w).Encode(LoginResponse{Message: "Acest email este deja înregistrat!"})
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(LoginResponse{Message: "Cont creat cu succes!"})
}

func leaderboardHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	query := "SELECT name, points FROM users ORDER BY points DESC LIMIT 5"
	rows, err := db.Query(query)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var leaderboard []LeaderboardUser
	for rows.Next() {
		var u LeaderboardUser
		if err := rows.Scan(&u.Name, &u.Points); err == nil {
			leaderboard = append(leaderboard, u)
		}
	}

	json.NewEncoder(w).Encode(leaderboard)
}

func updatePointsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	var req UpdatePointsRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	query := "UPDATE users SET points = $1 WHERE email = $2 AND (points < $1 OR points IS NULL)"
	_, err = db.Exec(query, req.Points, req.Email)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Punctaj actualizat!"})
}

func main() {
	initDB()
	defer db.Close()

	mux := http.NewServeMux()

	mux.HandleFunc("/api/login", loginHandler)
	mux.HandleFunc("/api/register", registerHandler)
	mux.HandleFunc("/api/leaderboard", leaderboardHandler)
	mux.HandleFunc("/api/update-points", updatePointsHandler)

	handler := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173", "http://localhost:5174", "http://localhost:4173"},
		AllowedMethods:   []string{"POST", "GET", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	}).Handler(mux)

	fmt.Println("Backend rulează pe http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}

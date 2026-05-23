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

// Variabila globală pentru baza de date
var db *sql.DB

// Structura pentru a citi datele trimise de SvelteKit
type LoginRequest struct {
	Email    string `json:"email" required`
	Password string `json:"password" required`
}

// Structura pentru răspunsul trimis înapoi la SvelteKit
type LoginResponse struct {
	Token   string `json:"token,omitempty"`
	Message string `json:"message,omitempty"`
}

func initDB() {
	var err error
	// Conexiunea către baza ta de date numită 'proiect'
	connStr := "postgres://postgres:1234@localhost:5432/proiect?sslmode=disable"

	db, err = sql.Open("pgx", connStr)
	if err != nil {
		log.Fatal("Eroare la deschiderea bazei de date:", err)
	}

	// Verificăm dacă baza de date este accesibilă
	err = db.Ping()
	if err != nil {
		log.Fatal("Nu s-a putut stabili conexiunea cu Postgres:", err)
	}

	fmt.Println("🚀 Conectat cu succes la PostgreSQL (baza de date: proiect)!")
}

// Handler pentru Logare
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

	var dbPassword string
	query := "SELECT password FROM users WHERE email = $1"
	err = db.QueryRow(query, req.Email).Scan(&dbPassword)

	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(LoginResponse{Message: "Email sau parolă incorectă!"})
		return
	}

	if req.Password == dbPassword {
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(LoginResponse{
			Token: "token-secret-de-test-12345",
		})
	} else {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(LoginResponse{Message: "Email sau parolă incorectă!"})
	}
}

// Handler pentru Înregistrare (Ruta nouă care lipsea!)
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

	// Inserăm utilizatorul nou în tabelul users din baza 'proiect'
	query := "INSERT INTO users (email, password) VALUES ($1, $2)"
	_, err = db.Exec(query, req.Email, req.Password)

	if err != nil {
		// Dacă e-mailul există deja în tabel
		w.WriteHeader(http.StatusConflict)
		json.NewEncoder(w).Encode(LoginResponse{Message: "Acest email este deja înregistrat!"})
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(LoginResponse{Message: "Cont creat cu succes!"})
}

func main() {
	initDB()
	defer db.Close()

	mux := http.NewServeMux()

	// Mapăm ambele rute ca să fie recunoscute de server
	mux.HandleFunc("/api/login", loginHandler)
	mux.HandleFunc("/api/register", registerHandler)

	handler := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173", "http://localhost:4173"},
		AllowedMethods:   []string{"POST", "GET", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	}).Handler(mux)

	fmt.Println("Backend-ul în Go rulează pe http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}

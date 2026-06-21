import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        // 🟢 Cerem topul de la backend-ul de Go (portul 8080)
        // Schimbă ruta '/api/leaderboard' sau '/api/users' dacă colega ta a numit-o altfel în Go
        const response = await fetch('http://localhost:8080/api/leaderboard');
        
        if (!response.ok) {
            throw new Error(`Eroare backend: ${response.status}`);
        }

        const topUtilizatori = await response.json();

        // Mapăm datele primite de la Go pentru clasamentul din pagină
        const leaderboardLive = (topUtilizatori || []).map((user: { name: string; puncte: number }, index: number) => ({
            rank: index + 1,
            name: user.name,
            puncte: user.puncte // sau user.xp / user.score, în funcție de ce trimite Go-ul
        }));

        return {
            leaderboard: leaderboardLive
        };

    } catch (error) {
        console.error("Eroare la încărcarea clasamentului din Go:", error);
        
        // 🟡 Fallback temporar: dacă ruta de Go nu e gata încă, întoarcem o listă ca să nu crape pagina
        return {
            leaderboard: [
                { rank: 1, name: 'Conectare live în curs...', puncte: 0 }
            ]
        };
    }
};
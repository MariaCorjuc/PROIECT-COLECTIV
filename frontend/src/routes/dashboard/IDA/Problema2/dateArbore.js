const solutieIDA = [
    {
        numarIteratie: 1, 
        limitaCorecta: 18,
        noduriAsteptate: ['A', 'B', 'D','E','F','G']
    }
];

/**
 * @param {number} iteratieCurenta
 * @param {number} limitaStudent
 * @param {string[]} noduriStudent
 * @returns {{ corect: boolean, scor: number, status: string, mesaj: string }}
 */
export function calculeazaPunctajIDA(iteratieCurenta, limitaStudent, noduriStudent) {
    const etapaCorecta = solutieIDA.find(s => s.numarIteratie === iteratieCurenta);

    if (!etapaCorecta) {
        return {
            corect: false,
            scor: 0,
            status: 'incorect',
            mesaj: "❌ Eroare: Iterație necunoscută."
        };
    }

    if (Number(limitaStudent) !== etapaCorecta.limitaCorecta) {
        return {
            corect: false,
            scor: 0,
            status: 'incorect',
            mesaj: `❌ Limita curentă este incorectă pentru Iterația ${iteratieCurenta}. Reanalizează valorile f(n) care au depășit limita anterioară!`
        };
    }

    if (noduriStudent.length !== etapaCorecta.noduriAsteptate.length) {
        return {
            corect: false,
            scor: 0,
            status: 'incorect',
            mesaj: `❌ Structura arborelui este incompletă sau greșită pentru această iterație.`
        };
    }

    for (let i = 0; i < etapaCorecta.noduriAsteptate.length; i++) {
        if (noduriStudent[i] !== etapaCorecta.noduriAsteptate[i]) {
            return {
                corect: false,
                scor: 0,
                status: 'incorect',
                mesaj: `❌ Ordinea de generare a nodurilor sau legăturile sunt greșite.`
            };
        }
    }

    const esteUltimaIteratie = iteratieCurenta === solutieIDA.length;

    if (esteUltimaIteratie) {
        return {
            corect: true,
            scor: 100,
            status: 'finalizat',
            mesaj: `🎉 Felicitări! Ai aplicat corect algoritmul IDA* pe toate iterațiile și ai terminat exercițiul!`
        };
    } else {
        return {
            corect: true,
            scor: 0,
            status: 'iteratie_ok',
            mesaj: `🎉 Felicitări! Iterația ${iteratieCurenta} este complet corectă. Apasă pe butonul de mai jos pentru a trece la următoarea iterație.`
        };
    }
}
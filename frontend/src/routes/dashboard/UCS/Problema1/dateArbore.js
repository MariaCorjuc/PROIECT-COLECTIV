export const raspunsCorect = ['S', 'A', 'B', 'D', 'H', 'D', 'E', 'C', 'F', 'F', 'G', 'G'];

/**
 *
 * @param {string[]} drumStudent 
 * @returns {number}
 */
export function calculeazaPunctajUCS(drumStudent) {
    const areAceeasiLungime = drumStudent.length === raspunsCorect.length;
    
    const esteTotulCorect = areAceeasiLungime && 
        drumStudent.every((litera, index) => litera === raspunsCorect[index]);

    if (esteTotulCorect) {
        return 100;
    } else {        
        return 20;
    }
}
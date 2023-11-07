// if () {
//
// } else {
//
// }

const utilisateurEstConnecte = false;
if (utilisateurEstConnecte) {
    console.log("Mon utilisateur est connecté");
} else {
    console.log("Mon utilisateur n'est pas connecté");
}


const nombreDeSiege = 30;
const nombreInvite = 31;

if (nombreDeSiege == nombreInvite) {
    console.log("Il y a le nombre exacte de siege pour les invités");
} else if(nombreDeSiege > nombreInvite) {
    console.log("Je peux continuer à inviter");
} else {
    console.log("Il n'y a pas assez de siege");
}


// Exercice 1:
// Ecrire un algorithme qui demande 2 nombres à l’utilisateur (vous les créerez vous même) 
// et l’informe ensuite le produit est négatif, positif ou nul.
const nombre1 = 10;
const nombre2 = -10;
const resultat = nombre1 * nombre2;

if (resultat > 0) {
    console.log("POSITIF");
} else if (resultat < 0) {
    console.log("NEGATIF");
} else {
    console.log("NUL");
}

// Exercice 2:
// Ecrire un algorithme qui demande l’âge d’un enfant à l’utilisateur (créer le vous même pour l'instant). 
// Ensuite, il l’informe de sa catégorie:
// - "Poussin" de 6 à 7 ans
// - "Pupille" de 8 à 9 ans
// - "Minime" de 10 à 11 ans
// - "Cadet" après 12 ans

const age = 5;

if (age <= 5) {
    console.log("Peux pas rentrer dans le club");
} else if (age <= 7) {
    console.log("Chez les POUSSINS");
} else if (age <= 9) {
    console.log("Chez les PUPILLES");
} else if (age <= 11) {
    console.log("Chez les MINIMES");
} else {
    console.log("Chez les CADETS");
}

// Exercice 3:
// Les habitants de Zorglub paient l’impôt selon les règles suivantes :
// - les hommes de plus de 20 ans paient l’impôt
// - les femmes paient l’impôt si elles ont entre 18 et 35 ans
// - les autres ne paient pas d’impôt
// Le programme demandera donc l’âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le fait que l’habitant est imposable.

const ageZorglub = 20;
const sexe = "H";

const condition1 = (sexe == "H") && (age > 20) 
const condition2 = (sexe == "F") && (age > 18) && (age < 35);

if (condition1 || condition2) {
    console.log("IMPOSABLE");
} else {
    console.log("PAS IMPOT");
}

// if (sexe == "H") {
//     if (age > 20) {
//         console.log("IMPOSABLE");
//     } else {
//         console.log("PAS IMPOT");
//     }
// } else if (sexe == "F") {
//     if (age > 18) {
//         if(age < 35) {
//             console.log("IMPOSABLE");
//         } else {
//             console.log("PAS IMPOT");
//         }
//     } else {
//         console.log("PAS IMPOT");
//     }
// } else {
//     console.log("PAS IMPOT");
// }

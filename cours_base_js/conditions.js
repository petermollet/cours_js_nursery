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
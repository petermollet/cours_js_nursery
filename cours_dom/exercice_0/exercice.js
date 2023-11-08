const estConnecte = true;

// Algorythme de modification du DOM:

const messageUtilisateur = document.getElementById("message-utilisateur");

if (!estConnecte) {
    messageUtilisateur.textContent = "Veuillez vous connecter à l'application avant de continuer";
    messageUtilisateur.classList.remove("text-primary");
    messageUtilisateur.classList.add("text-danger");
} else {
    messageUtilisateur.textContent = "Bonjour et bienvenue sur votre compte !";
    messageUtilisateur.classList.remove("text-danger");
    messageUtilisateur.classList.add("text-primary");
}
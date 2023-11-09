const livre = {
  titre: "Le seigneur des anneaux",
  auteur: "J.R.R. Tolkien",
  description: "Un anneau pour les gouverner tous, un anneau pour les trouver, un anneau pour les amener tous et dans les ténèbres les lier",
  dateDeParution: 1954,
  nombreDePages: 1200,
  estDisponible: true,
  image: "https://www.gallimard-jeunesse.fr/assets/media/cache/cover_medium/gallimard_img/image/J02275.jpg",
};

// ALGO pour insérer les données au dessus:

// j'insère le text dans les balises text
document.getElementById("titre").textContent = livre.titre;
document.getElementById("auteur").textContent = livre.auteur;
document.getElementById("description").textContent = livre.description;
document.getElementById("date").textContent = livre.dateDeParution;
document.getElementById("nombre-pages").textContent = livre.nombreDePages;

// j'insère l'URL de l'image dans le src de la balise img
document.getElementById("couverture").src = livre.image;

// selon si disponible ou non j'affiche un texte différent avec une couleur de fond différente
if (livre.estDisponible) {
  // SI disponible
  document.getElementById("disponible").textContent = "Disponible";
  document.getElementById("disponible").classList.add("bg-success");
} else {
  // SINON indisponible
  document.getElementById("disponible").textContent = "Non disponible";
  document.getElementById("disponible").classList.add("bg-danger");
}
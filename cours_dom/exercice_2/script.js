// Une seule variable 'livres' qui contient tout les livres !
// C'est ce qu'une base de donnée pourrait nous envoyer.
const livres = [
  {
    titre: "Le seigneur des anneaux",
    auteur: "J.R.R. Tolkien",
    description: "Un anneau pour les gouverner tous, un anneau pour les trouver, un anneau pour les amener tous et dans les ténèbres les lier",
    dateDeParution: 1954,
    nombreDePages: 1200,
    estDisponible: true,
    image: "https://www.gallimard-jeunesse.fr/assets/media/cache/cover_medium/gallimard_img/image/J02275.jpg",
  },
  {
    titre: "Harry Potter",
    auteur: "J.K. Rowling",
    description: "Harry Potter à l'école des sorciers. Harry Potter est un garçon ordinaire. Mais le jour de ses onze ans, son existence bascule : un géant vient le chercher pour l'emmener dans une école de sorciers. Quel mystère entoure donc sa naissance et qui est l'effroyable V..., le mage dont personne n'ose prononcer le nom ? Voler à cheval sur des balais, jeter des sorts, combattre les Trolls : Harry Potter se révèle un sorcier vraiment doué. Mais un mystère entoure sa naissance et l'effroyable V., le mage dont personne n'ose prononcer le nom.",
    dateDeParution: 1997,
    nombreDePages: 320,
    estDisponible: false,
    image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81smq5GDvvL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    titre: "The Shining",
    auteur: "Stephen King",
    description: "Shining, l'enfant lumière est un roman d'horreur écrit par Stephen King et publié en 1977. Cet ouvrage, le troisième qu’il publie, l’établit comme une figure importante du genre fantastique",
    dateDeParution: 1977,
    nombreDePages: 1000,
    estDisponible: true,
    image: "https://www.livredepoche.com/sites/default/files/images/livres/couv/9782253151623-001-T.jpeg",
  }
];

// Si vous regardez l'URL de la page d'un livre vous verrez que ça fini par: /page_livre.html?id=
// Avec id étant un chiffre qui soit 0 ou 1, correspondant à la place du livre dans le tableau au dessus.
// En dessous, je vous mets le bout de code pour récupérer ce paramètre
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id"); // paramère id venant de l'URL, sera 0 ou 1


// ALGO pour ajouter le bon livre:
const livre = livres[id];


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
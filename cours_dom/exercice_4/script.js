let c = 0;

const btnPlus = document.getElementById("btn-plus");
const btnMoins = document.getElementById("btn-moins");
const compteur = document.getElementById("compteur");

btnPlus.addEventListener("click", function (e) {
  c = c + 1; // c++;
  compteur.textContent = c;
});

btnMoins.addEventListener("click", function (e) {
  c = c - 1; // c++;
  compteur.textContent = c;
});

const form = document.getElementById("mon-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //  Methode 1 pour récupérer la valeur d'un input
  const inputnom = document.getElementById("inputnom");
  // console.log(inputnom.value)
  // Methode 2
  // console.log(e.target.elements.inputnom.value);

  const resultat = document.getElementById("resultat");
  resultat.textContent = inputnom.value;
});

let titre = document.getElementById("titre");
console.log(titre);

let containers = document.getElementsByClassName("container");
console.log(containers);

let bonjours = document.getElementsByName("bonjour");
console.log(bonjours);

titre.textContent = "Bonjour le monde";

let maDiv = document.getElementById("ma-div");
maDiv.innerHTML = "<p>Ma balise insérer avec javascript</p>";

titre.classList.add("m-3");
titre.classList.add("border-bottom");

maDiv.classList.remove("container");

document.getElementById("mon-container").classList.toggle("container");

let monSpan = document.createElement("span");
maDiv.appendChild(monSpan);
maDiv.removeChild(monSpan);

const form = document.getElementById("mon-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const adresse = document.getElementById("inputadresse").value;
    const codePostal = document.getElementById("inpucode").value;
    const ville = document.getElementById("inputville").value;

    document.getElementById("resultat").textContent = adresse + " " + codePostal + " " + ville;
});

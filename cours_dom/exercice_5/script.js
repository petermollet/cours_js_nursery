const dark = document.getElementById("dark");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

dark.addEventListener("click", function (e) {
  const body = document.getElementsByTagName("body")[0];
  body.classList.remove("yellowTheme");
  body.classList.remove("greenTheme");
  body.classList.add("darkTheme");
});

yellow.addEventListener("click", function (e) {
  const body = document.getElementsByTagName("body")[0];
  body.classList.remove("darkTheme");
  body.classList.remove("greenTheme");
  body.classList.add("yellowTheme");
});

green.addEventListener("click", function (e) {
  const body = document.getElementsByTagName("body")[0];
  body.classList.remove("yellowTheme");
  body.classList.remove("darkTheme");
  body.classList.add("greenTheme");
});

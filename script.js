const name = "Anvi"; // change her name here
document.getElementById("herName").innerText = name;

function nextPage(current) {
  document.getElementById("page" + current).classList.add("hidden");
  document.getElementById("page" + (current + 1)).classList.remove("hidden");
}
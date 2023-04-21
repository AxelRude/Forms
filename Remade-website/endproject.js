const navButton = document.getElementById("nav-btn");
const navBar = document.querySelector(".nav-links");
const links = navBar.querySelectorAll("a");

document.addEventListener("click", () => {
  if (navBar.classList.contains("open")) {
    navBar.classList.toggle("open");
  }
});

navButton.addEventListener("click", (e) => {
  navBar.classList.toggle("open");
  //stopPropagation gör att händelsen stoppas när denna funktion har körts. Händelser händer inifrån, alltså koden som påverkar det närmast där händelsen skedde körs första.
  e.stopPropagation();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

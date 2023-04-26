const navButton = document.getElementById("nav-btn");
const navBar = document.querySelector(".nav-links");
const links = navBar.querySelectorAll("a");
const primaryNav = document.querySelector(".primary-nav");

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

window.addEventListener("scroll", () => {
  primaryNav.classList.toggle("sticky", window.scrollY > 0);
});

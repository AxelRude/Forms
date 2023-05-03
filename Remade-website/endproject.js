const navButton = document.getElementById("nav-btn");
const navBar = document.querySelector(".nav-links");
const links = navBar.querySelectorAll("a");
const primaryNav = document.querySelector(".primary-nav");
const languageDisplay = document.querySelector(".which-language");
const languageChange = document.querySelector(".languages");

navButton.addEventListener("click", (e) => {
  //Funktion för att få meny med länkar synas när man klickar på hamburgarmenyn.
  navBar.classList.toggle("open");
  //stopPropagation gör att händelsen stoppas när denna funktion har körts.
  //Händelser händer inifrån, alltså koden som påverkar det närmast där händelsen skedde körs först.
  e.stopPropagation();
});

links.forEach((link) => {
  //Funktion för att ta bort menyn med länkar om man klickar på en av länkarna.
  link.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

document.addEventListener("click", () => {
  //Funktion för att klicka ner menyn om man klickar någonstnas på sidan. Körs endast om menyn är öppen.
  if (navBar.classList.contains("open")) {
    navBar.classList.toggle("open");
  }
});

window.addEventListener("scroll", () => {
  //Funktion för att utföra animationerna på menyn när man scrollat ner lite på sidan.
  primaryNav.classList.toggle("sticky", window.scrollY > 16);
});

languageChange.addEventListener("change", (e) => {
  const selectedLanguage = e.target.value;
  languageDisplay.innerText = selectedLanguage;
});

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
  /*Detta är en proof of concept funktion för att "ändra språket". Jag valde att göra så att det står vilket språk 
  man har valt istället för att ändra om hela sidan då det skulle mycket lång tid.
  I HTML-filen har jag en form med en select i.
  Denna har 3 olika alternativ för olika språk. Denna funktion körs när man ändrar vilket alternativ som är valt.*/
  const selectedLanguage = e.target.value;
  //Denna variabel hämtas är det value som det valda alernativet har
  languageDisplay.innerText = selectedLanguage;
  //Sedan ändras värdet på en textrad som finns i nav-baren till det value som det valda alernativet har
});

/*Hämtar variabler från klasser i HTML-koden*/
const navButton = document.getElementById("nav-btn");
const navBar = document.querySelector(".links");
const links = navBar.querySelectorAll("a");

/*En funktion som aktiveras när man klickar på hamburgarmenyn*/
navButton.addEventListener("click", () => {
  /*När man klickar på hamburgarmenyn byter den klassnamn på listan med länkar till "links-open". 
  När den inte har klassen "links-open" finns det en css kod som gör att den är gömd, 
  men när den har klassen "links-open" finns det en css kod som gör att den syns.*/
  navBar.classList.toggle("open");
});

/*En funktion för varje länk i listan*/
links.forEach((link) => {
  /*Funktionen aktiveras när man klickar på en av länkarna.*/
  link.addEventListener("click", () => {
    /*Gör samma sak förra funktionen, det byter klassnamn på listan med länkar.
    Denna funktion gör dock motsatt från förra och när man klickar på en av länkarna byts klassnamnet från "links-open" 
    till den originella "links". Detta gör alltså att när man klickar på en av länkarna går listan från att synas till att inte synas.*/
    navBar.classList.toggle("open");
  });
});

const navButton = document.getElementById("nav-btn");
const navBar = document.querySelector(".nav-links");
const links = navBar.querySelectorAll("a");
const primaryNav = document.querySelector(".primary-nav");
const languageDisplay = document.querySelector(".which-language");
const languageChange = document.querySelector(".languages");
/*För slide karusellen*/
let slideIndex = 0;
/*kör funktionen*/
slideShow();
const categoriesItem = document.querySelectorAll(".item");
const popUp = document.querySelector(".pop-up");
const popUpBtn = document.querySelector(".pop-up-btn");
//variabler för main-content i navbar:
const forSale = document.querySelector(".for-sale");
const forSaleLink = document.querySelector(".link-for-sale");
const services = document.querySelector(".services");
const servicesLink = document.querySelector(".link-services");
const housing = document.querySelector(".housing");
const housingLink = document.querySelector(".link-housing");
const popular = document.querySelector(".popular");
const popularLink = document.querySelector(".link-popular");

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
  if (popUp.classList.contains("open")) {
    popUp.classList.toggle("open");
  }
});

window.addEventListener("scroll", () => {
  //Funktion för att utföra animationerna på menyn när man scrollat ner lite på sidan.
  primaryNav.classList.toggle("sticky", window.scrollY > 700);
  forSale.classList.toggle("scrolled", window.scrollY > 700);
  services.classList.toggle("scrolled", window.scrollY > 700);
  housing.classList.toggle("scrolled", window.scrollY > 700);
  popular.classList.toggle("scrolled", window.scrollY > 700);
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

function slideShow() {
  let i;
  //Hämtar de tre olika exempel-artiklarna från HTML-koden och ger de ett variabel namn "slides" och lägger in i en lista.
  let slides = document.querySelectorAll(".reccomended-post");
  /*Börjar med att sätta i till 0, ser så att i är mindre än 3 (antal exempel artiklar).
  sedan tas klassnamnet "shown" bort från den första exempel artikeln för att den inte ska synas. 
  Därefeter ökar i med 1 och den sätter nästa exempel artikel till display none.
  Om i blir mer än antal exempel artiklar stängs loopen av och går vidare till nästa.*/
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("shown");
  }
  //Ökar variabeln slideIndex (hämtas längst upp) med ett
  slideIndex++;
  //Om slideIndex är större än antalet exempel artiklar sätts variabeln till 1.
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  //Sätter den exempel artiklen som har indexet som är ett mindre än slideIndex till klassnamn "shown" så att den syns.
  slides[slideIndex - 1].classList.add("shown");
  //Startar om denna funktion en gång varje 4 sekunder.
  setTimeout(slideShow, 2200);
}

function closeAllLinks(currentElement) {
  //Hämtar alla stora menyer och lägger i en array
  const megaMenus = [forSale, housing, popular, services];
  //Kollar om den Delen som man klickar på är öppen och om den inte är det läggs det in  en variabel.
  const shouldOpen = !currentElement.classList.contains("open");
  //Loopar igenom för att se om det är någon meny som är öppen och om så är fallet stängs den.
  for (const link of megaMenus) {
    if (link.classList.contains("open")) {
      link.classList.toggle("open");
    }
  }
  //Öppnar/stänger den meny som klickas på.
  if (shouldOpen) {
    currentElement.classList.toggle("open");
  }
}

//Funktioner för att ta fram de olika kategorierna när man klickar i nav-baren
forSaleLink.addEventListener("click", () => {
  closeAllLinks(forSale);
});

servicesLink.addEventListener("click", () => {
  closeAllLinks(services);
});

housingLink.addEventListener("click", () => {
  closeAllLinks(housing);
});
popularLink.addEventListener("click", () => {
  closeAllLinks(popular);
});

//Funktion för att ta bort listan med alla olika kategorier när man klickar på en av de.
//Samt tar upp pop up rutan som säger att det inte finns några tillgängliga annonser + sätter fokus på den,
categoriesItem.forEach((item) => {
  item.addEventListener("click", (a) => {
    closeAllLinks(popUp);
    popUpBtn.focus();
    a.stopPropagation();
  });
});

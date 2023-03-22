const navButton = document.getElementById("nav-btn");
const navBar = document.querySelector(".links");
const links = navBar.querySelectorAll("a");

navButton.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

const vehiclesInfo = document.querySelector(".vehicles-info");
const categorySelector = document.querySelector(".category");
const submitBtn = document.querySelector(".post-btn");
const popUp = document.querySelector(".pop-up");
const popUpBtn = document.querySelector(".pop-up-btn");
const returnBtn = document.querySelector(".btn-text");

categorySelector.addEventListener("change", (a) => {
  //Om man väljer kategorin "vehicles" så öpnnas en till form med lite mer info som man ska fylla i.
  if (a.target.value === "vehicles") {
    vehiclesInfo.classList.add("open");
  } else {
    vehiclesInfo.classList.remove("open");
  }
});

submitBtn.addEventListener("click", (a) => {
  console.log(popUpBtn);
  popUp.classList.toggle("open");
  returnBtn.focus();
  a.stopPropagation();
});

document.addEventListener("click", () => {
  if (popUp.classList.contains("open")) {
    popUp.classList.toggle("open");
  }
});

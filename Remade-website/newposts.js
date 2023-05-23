const vehiclesInfo = document.querySelector(".vehicles-info");
const categorySelector = document.querySelector(".category");

categorySelector.addEventListener("change", (a) => {
  //Om man väljer kategorin "vehicles" så öpnnas en till form med lite mer info som man ska fylla i.
  if (a.target.value === "vehicles") {
    vehiclesInfo.classList.add("open");
  } else {
    vehiclesInfo.classList.remove("open");
  }
});

const elemDomImage = document.getElementById("dom-image");
const elemMessage = document.getElementById("message");
const elemResource = document.getElementById("resource");
const elemDom = document.getElementById("dom");

/*Perfoms the animations on click, for phones and tablet.*/
elemDomImage.addEventListener("click", (event) => {
  elemDomImage.classList.toggle("dom-image-hover");
});
/*Returns the animation to the start position*/
elemDom.addEventListener("click", (event) => {
  elemDom.classList.toggle("dom-image-hover2");
});

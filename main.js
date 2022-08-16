const menuBtn = document.querySelector(".menu--btn");
const menuImg = document.querySelector(".menu--btn img");
const navbar = document.querySelector(".navbar");

let click = false;

menuBtn.addEventListener("click", () => {
  if (!click) {
    menuImg.src = "./images/icon-close.svg";
    navbar.classList.add("active");
    click = true;
  } else {
    menuImg.src = "./images/icon-hamburger.svg";
    navbar.classList.remove("active");
    click = false;
  }
});

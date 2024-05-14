// imports

const hamburger = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementsByClassName("links-mobile");
console.log(mobileMenu);

// handle hamburger
hamburger.addEventListener("click", () => {
  console.log("clicked");
  hamburger.classList.toggle("active");
  mobileMenu[0].classList.toggle("active");
});

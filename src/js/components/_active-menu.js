const main = document.querySelector(".main");

if (main.dataset) {
  const navSliderListLink = document.querySelectorAll(".nav__link");
  navSliderListLink.forEach((el) => {
    if (el.dataset.text === main.dataset.descr) {
      el.classList.add("nav__link--active");
    }
  });
}

const burder = document.querySelector(".burger");
const mobileNav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");

burder.addEventListener("click", () => {
  burder.classList.toggle("burger--active");
  mobileNav.classList.toggle("nav--active");
});

// navLink.addEventListener('click', ()=> {

// })
navLink.forEach((el) => {
  el.addEventListener("click", () => {
    if (
      mobileNav.classList.contains("nav--active") &&
      burder.classList.contains("burger--active")
    ) {
      mobileNav.classList.remove("nav--active");
      burder.classList.remove("burger--active");
    }
  });
});

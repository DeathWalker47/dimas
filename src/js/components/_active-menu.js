window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  document.querySelectorAll(".section-page").forEach((el, i) => {
    if (el.offsetTop <= scrollDistance) {
      document.querySelectorAll(".nav a").forEach((el) => {
        if (el.classList.contains("nav__link--active")) {
          el.classList.remove("nav__link--active");
        }
      });

      document
        .querySelectorAll(".nav li")
        [i].querySelector("a")
        .classList.add("nav__link--active");
    }
  });
});

const listItem = document.querySelectorAll(".project-list__item");
const project = document.querySelector(".project");

listItem.forEach((el) => {
  el.addEventListener("mouseover", function (e) {
    const self = e.currentTarget;
    listItem.forEach((el) => el.classList.remove("project-list__item--active"));
    self.classList.add("project-list__item--active");
    console.log(self.dataset.src);
    project.setAttribute(
      "style",
      // `background-image: url(./img/proj-${self.dataset.src}.jpg)`
      `${self.dataset.src}`
    );
  });
});


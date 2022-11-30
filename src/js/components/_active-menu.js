const main = document.querySelector('.main')

if(main.dataset) {
const navSliderListLink = document.querySelectorAll('.nav__link');
  navSliderListLink.forEach(el => {
    if(el.dataset.text === main.dataset.descr) {
      el.classList.add('nav__link--active')
    }
  })
}

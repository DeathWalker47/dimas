import Swiper, { Navigation, Pagination, EffectCreative, Mousewheel } from 'swiper';


Swiper.use([Navigation, Pagination, EffectCreative, Mousewheel]);

const swiper = new Swiper('.swiper-page', {
  // slidesPerView: 1,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-page__next',
    prevEl: '.swiper-page__prev',
  },
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-page__pagination',
    type: 'bullets',
  },
  grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        // shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
});

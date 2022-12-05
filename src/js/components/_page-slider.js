// import Swiper, { Navigation, Pagination, EffectCreative, Mousewheel, HashNavigation, Thumb } from 'swiper';
// Swiper.use([Navigation, Pagination, EffectCreative, Mousewheel, HashNavigation, Thumb]);

import Swiper from 'swiper/bundle';


const swiperNav = new Swiper('.nav-swiper', {
  slidesPerView: 7,
  direction: "horizontal",
  slideToClickedSlide:true,
  watchSlidesProgress: true,

  hashNavigation: true,
});

const swiperHome = new Swiper('.home-swiper', {
  speed: 1000,
  navigation: {
    nextEl: '.home-swiper__next',
    prevEl: '.home-swiper__prev',
  },
  mousewheel: {
    invert: false,
  },
  slidesPerView: 1,
  direction: "vertical",
  pagination: {
    el: '.home-swiper__pagination',
    type: 'bullets',
    clickable: true,
  },
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: [-1, "-100%", 0],
      },
      next: {
        translate: [0, "10%", -1],
      },
    },

    thumbs: { // указываем на превью слайдер
      swiper: swiperNav // указываем имя превью слайдера
    },
    });


const swiper = new Swiper('.swiper-page', {
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
    clickable: true,
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




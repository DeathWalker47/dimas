import Swiper, { Navigation, Pagination, EffectCreative, Mousewheel } from 'swiper';


Swiper.use([Navigation, Pagination, EffectCreative, Mousewheel]);


const swiperHome = new Swiper('.home-swiper', {
  speed: 1000,
  // navigation: {
  //   nextEl: '.swiper-page__next',
  //   prevEl: '.swiper-page__prev',
  // },
  mousewheel: {
    invert: false,
  },
  // slidesPerView: 1,
  // direction: "vertical",
  pagination: {
    el: '.home-swiper__pagination',
    type: 'bullets',
    clickable: true,
  },
  // grabCursor: true,
  //   effect: "creative",
  //   creativeEffect: {
  //     prev: {
  //       // shadow: true,
  //       translate: ["-20%", 0, -1],
  //     },
  //     next: {
  //       translate: ["100%", 0, 0],
  //     },
  //   },
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

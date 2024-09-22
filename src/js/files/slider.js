import Swiper from "swiper";
import { Autoplay, Scrollbar, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function slider() {
  const aboutSlider = document.querySelector(".about__slider");
  if (aboutSlider) {
    const swiper = new Swiper(aboutSlider, {
      speed: 700,
      modules: [Autoplay, Scrollbar],
      autoplay: true,
      grabCursor: true,
      spaceBetween: 15,
      slidesPerView: "auto",
      scrollbar: {
        el: ".about__scrollbar",
        draggable: true,
      },
      breakpoints: {
        743: {
          spaceBetween: 25,
        },
      },
    });
  }

  const roomSliders = document.querySelectorAll(".room-slider");
  if (roomSliders.length) {
    roomSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 700,
        modules: [Autoplay, Navigation, Pagination],
        autoplay: true,
        grabCursor: true,
        spaceBetween: 15,
        navigation: {
          prevEl: slider.querySelector(".slider-nav__btn--prev"),
          nextEl: slider.querySelector(".slider-nav__btn--next"),
        },
        pagination: {
          el: slider.querySelector(".slider-pag"),
          clickable: true,
        },
      });
    });
  }

  const offersSlider = document.querySelector(".offers__slider");
  if (offersSlider) {
    const swiper = new Swiper(offersSlider, {
      speed: 700,
      modules: [Autoplay, Navigation],
      autoplay: {
        delay: 3000,
      },
      grabCursor: true,
      spaceBetween: 20,
      slidesPerView: 2,
      navigation: {
        prevEl: ".offers .slider-nav__btn--prev",
        nextEl: ".offers .slider-nav__btn--next",
      },
      breakpoints: {
        993: {
          slidesPerView: 4,
          spaceBetween: 35,
        },
        744: {
          spaceBetween: 25,
          slidesPerView: 3,
        },
      },
    });
  }

  const otherRoomsSlider = document.querySelector(".other-rooms__slider");
  if (otherRoomsSlider) {
    const swiper = new Swiper(otherRoomsSlider, {
      speed: 700,
      modules: [Autoplay, Navigation],
      grabCursor: true,
      spaceBetween: 16,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        993: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        744: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        450: {
          spaceBetween: 16,
          slidesPerView: 2,
        },
      },
    });
  }

  const heroSlider = document.querySelector(".hero__slider");
  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 700,
      modules: [Autoplay, Navigation, EffectFade, Pagination],
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".hero .slider-nav__btn--prev",
        nextEl: ".hero .slider-nav__btn--next",
      },
      pagination: {
        el: ".hero .slider-pag",
        clickable: true,
      },
    });
  }
}

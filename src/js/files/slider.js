import Swiper from "swiper";
import { Autoplay, Scrollbar, Navigation, Pagination } from "swiper/modules";

import "swiper/css";

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

  const ourRoomsSliders = document.querySelectorAll(".our-rooms__slider");
  if (ourRoomsSliders.length) {
    ourRoomsSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 700,
        modules: [Autoplay, Navigation, Pagination],
        autoplay: true,
        grabCursor: true,
        spaceBetween: 15,
        navigation: {
          prevEl: ".our-rooms .slider-nav__btn--prev",
          nextEl: ".our-rooms .slider-nav__btn--next",
        },
        pagination: {
          el: ".our-rooms .slider-pag",
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
      autoplay: true,
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
        }
      }
    });
  }
}

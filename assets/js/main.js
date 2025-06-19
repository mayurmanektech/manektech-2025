document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.getElementById("certificationLogoWrapper");
    wrapper.innerHTML += wrapper.innerHTML; // duplicate slides

    const swiper = new Swiper('.swiper-container', {
      loop: false,
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      freeModeMomentum: false,
      allowTouchMove: false,
      grabCursor: false,
      slidesPerView: 9,
      spaceBetween: 81,
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 36,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 36,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 48,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 64,
        },
        1400: {
          slidesPerView: 9,
          spaceBetween: 81,
        },
      },
    });
  });

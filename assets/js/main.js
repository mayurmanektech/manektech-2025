document.addEventListener('DOMContentLoaded', function () {
    // const container_margin = $(".get-margin").css('margin-left');
    // $(".process-slider-prev").css("left", container_margin);
    // $(".process-slider-next").css("right", container_margin);
    const wrapper = document.getElementById("certificationLogoWrapper");
    wrapper.innerHTML += wrapper.innerHTML; // duplicate slides

    const swiper = new Swiper('.swiper-container', {
      loop: true,
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

    const swiper_process = new Swiper('.process-slider .swiper', {
        speed: 400,
        spaceBetween: 0,
        navigation: {
            nextEl: ".process-slider-next",
            prevEl: ".process-slider-prev",
          },
      });
  });

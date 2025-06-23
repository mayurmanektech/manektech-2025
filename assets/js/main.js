document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    // Fixed Header Script
    // const header = document.getElementById('mainHeader');
    const header = document.body;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
        header.classList.add('scrolled');
        } else {
        header.classList.remove('scrolled');
        }
    });

  });

function setupResponsiveMenu() {
  const isMobile = jQuery(window).width() < 1200;

  // Unbind previous event handlers to prevent duplicates
  jQuery('.menu-arrow').off('click');
  jQuery('#menu-toggle').off('click');
  jQuery('#close-menu').off('click');

  if (isMobile) {
    // Toggle first-level .sub-menu
    jQuery('.main-menu > li > .menu-arrow').on('click', function (e) {
      e.preventDefault();

      const element = jQuery(this).closest('li');

      if (element.hasClass('toggle')) {
        element.removeClass('toggle');
        element.find('.sub-menu').slideUp('slow');
        element.find('li').removeClass('toggle');
      } else {
        element.addClass('toggle');
        element.children('.sub-menu').slideDown('slow');
        element.siblings('li').removeClass('toggle').find('.sub-menu').slideUp('slow');
        element.siblings('li').find('li').removeClass('toggle');
      }
    });

    // Toggle nested submenu in .sub-menu-inner
    jQuery('.sub-menu-inner .menu-arrow').on('click', function (e) {
      e.preventDefault();

      const $this = jQuery(this);
      const $ul = $this.siblings('ul');

      // Toggle this one
      if ($ul.is(':visible')) {
        $ul.slideUp('slow');
      } else {
        // Close sibling <ul>s
        $this.closest('.sub-menu-inner')
          .siblings('.sub-menu-inner')
          .find('ul:visible')
          .slideUp('slow');

        $ul.slideDown('slow');
      }
    });

    // Open mobile menu
    jQuery('.menu-toggle').on('click', function () {
      jQuery("html").addClass("open");
    });

    // Close mobile menu
    jQuery('#close-menu').on('click', function () {
      jQuery("html").removeClass("open");
      jQuery('.sub-menu').slideUp('slow');
      jQuery('.main-menu > li').removeClass('toggle');
      jQuery('.sub-menu-inner ul').slideUp('slow');
    });

  } else {
    // Reset for desktop
    jQuery("html").removeClass("open");
    jQuery('.sub-menu').removeAttr('style');
    jQuery('.sub-menu-inner ul').removeAttr('style');
    jQuery('.main-menu > li').removeClass('toggle');
  }
}

// Init on document ready
jQuery(document).ready(function () {
  setupResponsiveMenu();
});

// Re-run on resize
jQuery(window).on('resize', function () {
  setupResponsiveMenu();
});



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
    var pElements = $('.journey-content > .title');
    var journey_pagination = [];
    pElements.each(function (i, el) {
      journey_pagination.push($(el).text());
    });
    const swiper_journey = new Swiper('.journey-slider', {
      speed: 400,
      spaceBetween: 130,
      navigation: {
        nextEl: ".journey-slider-next",
        prevEl: ".journey-slider-prev",
      },
      pagination: {
        el: '.journey-pagination',
        clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (journey_pagination[index]) + '</span>';
          },
      },
    });
  });






    const countries = [
  { name: "India", code: "IN", dial_code: "+91" },
  { name: "United States", code: "US", dial_code: "+1" },
  { name: "United Kingdom", code: "GB", dial_code: "+44" },
  { name: "Australia", code: "AU", dial_code: "+61" },
  { name: "Canada", code: "CA", dial_code: "+1" },
  { name: "Germany", code: "DE", dial_code: "+49" },
  { name: "France", code: "FR", dial_code: "+33" },
  { name: "Japan", code: "JP", dial_code: "+81" },
  { name: "Brazil", code: "BR", dial_code: "+55" },
  { name: "South Africa", code: "ZA", dial_code: "+27" },
];

const select = document.getElementById("timezone");
const input = document.getElementById("countryCode");
const prefixDisplay = document.getElementById("prefixDisplay");

let currentPrefix = "+91"; // default

function setCountryCodePrefix(prefix) {
  currentPrefix = prefix;
  prefixDisplay.textContent = currentPrefix;
  input.value = ''; // Clear user input on change (optional)
  // input.focus();
}

// Load dropdown without dial codes in text
countries.forEach((country, i) => {
  const option = document.createElement("option");
  option.value = country.code;
  option.setAttribute("data-code", country.dial_code);
  option.textContent = country.name;
  select.appendChild(option);
  if (i === 0) setCountryCodePrefix(country.dial_code);
});

select.addEventListener("change", function () {
  const selected = select.options[select.selectedIndex];
  const code = selected.getAttribute("data-code");
  setCountryCodePrefix(code);
});

// map location hover effect js

  document.querySelectorAll('.location-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      const loc = item.dataset.location;
      const dot = document.querySelector(`.map-dot[data-location="${loc}"]`);
      dot?.classList.add('pulse');
    });

    item.addEventListener('mouseleave', () => {
      const loc = item.dataset.location;
      const dot = document.querySelector(`.map-dot[data-location="${loc}"]`);
      dot?.classList.remove('pulse');
    });
  });
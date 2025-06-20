document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    // Fixed Header Script
    const header = document.getElementById('mainHeader');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
        header.classList.add('scrolled');
        } else {
        header.classList.remove('scrolled');
        }
    });


    // Responsive menu 
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const navMenu = document.querySelector(".nav-menu");
const menuArrows = document.querySelectorAll(".menu-arrow");
const htmlEl = document.documentElement; // reference to <html>

// Open nav-menu
menuToggle.addEventListener("click", () => {
  if (window.innerWidth < 1200) {
    navMenu.classList.add("open");
    htmlEl.classList.add("active");  // Add active class to <html>
  }
});

// Close nav-menu
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("open");
  htmlEl.classList.remove("active");  // Remove active class from <html>
});

// Toggle top-level sub-menus
menuArrows.forEach(arrow => {
  arrow.addEventListener("click", function (e) {
    e.stopPropagation();
    const currentLi = this.closest("li");
    const currentSubMenu = currentLi.querySelector(".sub-menu");

    document.querySelectorAll(".sub-menu").forEach(sub => {
      if (sub !== currentSubMenu) {
        slideUp(sub);
      }
    });

    // Toggle current submenu
    if (currentSubMenu.classList.contains("open")) {
      slideUp(currentSubMenu);
    } else {
      slideDown(currentSubMenu);
    }
  });
});

// Toggle sub-menu-inner ul
const innerSpans = document.querySelectorAll(".sub-menu-inner span");
innerSpans.forEach(span => {
  span.addEventListener("click", function (e) {
    e.stopPropagation();
    const currentUl = this.nextElementSibling;

    document.querySelectorAll(".sub-menu-inner ul").forEach(ul => {
      if (ul !== currentUl) {
        slideUp(ul);
      }
    });

    if (currentUl.classList.contains("open")) {
      slideUp(currentUl);
    } else {
      slideDown(currentUl);
    }
  });
});

// Utility slide functions
function slideUp(element) {
  element.style.height = element.scrollHeight + 'px'; // set to current height to allow transition
  requestAnimationFrame(() => {
    element.style.transition = 'height 0.3s linear, opacity 0.3s ease';
    element.style.height = '0';
    element.style.opacity = '0';
  });
  element.classList.remove('open');
  setTimeout(() => {
    element.style.display = 'none';
    element.style.removeProperty('height');
    element.style.removeProperty('opacity');
    element.style.removeProperty('transition');
  }, 300);
}

function slideDown(element) {
  element.style.display = 'block';
  element.style.height = '0';
  element.style.opacity = '0';

  requestAnimationFrame(() => {
    element.style.transition = 'height 0.3s linear, opacity 0.3s ease';
    element.style.height = element.scrollHeight + 'px';
    element.style.opacity = '1';
  });

  element.classList.add('open');

  setTimeout(() => {
    element.style.removeProperty('height');
    element.style.removeProperty('opacity');
    element.style.removeProperty('transition');
  }, 300);
}

});



  document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.certification-logo-track');
    track.innerHTML += track.innerHTML;
    track.innerHTML += track.innerHTML;
    track.innerHTML += track.innerHTML;
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
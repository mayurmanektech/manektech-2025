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
      speed: 1400,
      spaceBetween: 0,
      autoHeight :true,
      loop: true,
      effect: "fade",
      navigation: {
        nextEl: ".process-slider-next",
        prevEl: ".process-slider-prev",
      },
      pagination: {
        el: ".process-pagination",
        clickable: true,
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
      autoHeight :true,
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

    const swiper_trusted = new Swiper('.trusted-slider', {
      speed: 400,
      spaceBetween: 0,
      autoHeight :true,
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 36,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 36,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 48,
        },
      },
      navigation: {
        nextEl: ".trusted-slider-next",
        prevEl: ".trusted-slider-prev",
      },
      pagination: {
        el: ".trusted-pagination",
        clickable: true,
      },
    });
  });








  // select dropdown form 

//    


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

function initCountrySelector(selectId, inputId, prefixId, defaultPrefix) {
  const select = document.getElementById(selectId);
  const input = document.getElementById(inputId);
  const prefixDisplay = document.getElementById(prefixId);

 function setCountryCodePrefix(prefix, shouldFocus = true) {
  prefixDisplay.textContent = prefix;
  input.value = '';
  if (shouldFocus) input.focus();
}

countries.forEach((country, i) => {
  const option = document.createElement("option");
  option.value = country.code;
  option.setAttribute("data-code", country.dial_code);
  option.textContent = country.name;
  select.appendChild(option);
});

  select.addEventListener("change", function () {
    const selected = select.options[select.selectedIndex];
    const code = selected.getAttribute("data-code");
    setCountryCodePrefix(code);
  });

  // Set initial prefix
setCountryCodePrefix(defaultPrefix || "+91", false);
}

// Initialize both selectors
initCountrySelector("timezone", "countryCode", "prefixDisplay", "+91");
initCountrySelector("timezone2", "countryCode2", "prefixDisplay2", "+91");




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



  //  our process progress step

// const sidebarItems = document.querySelectorAll('.progress-list li');
// const progressLine = document.querySelector('.progress-line');
// const steps = document.querySelectorAll('.step');

// sidebarItems.forEach((item, index) => {
//   item.addEventListener('click', () => {130
//     sidebarItems.forEach(li => li.classList.remove('active'));
//     item.classList.add('active');

//     const targetStep = steps[index];
//     const firstStepTop = steps[0].offsetTop;
//     const targetBottom = targetStep.offsetTop + targetStep.offsetHeight;
//     const newHeight = targetBottom - firstStepTop;

//     progressLine.style.height = newHeight + 'px';

//     const headerOffset = 130;
//     const elementPosition = targetStep.getBoundingClientRect().top + window.scrollY;
//     const offsetPosition = elementPosition - headerOffset;

//     window.scrollTo({
//       top: offsetPosition,
//       behavior: 'smooth'
//     });
//   });
// });



// Handle click on "How we do it?" heading
const howWeDoItTrigger = document.querySelector('h6[data-target="#howwedoit"]');

if (howWeDoItTrigger) {
  howWeDoItTrigger.addEventListener('click', () => {
    const targetId = howWeDoItTrigger.getAttribute('data-target');
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      const headerOffset = 130; 
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
}


// our process progress step

const sidebarItems = document.querySelectorAll('.progress-list li');
const progressLine = document.querySelector('.progress-line');
const steps = document.querySelectorAll('.step');
const headerOffset = 190;

let isScrollingByClick = false;

function activateStep(index) {
  sidebarItems.forEach(li => li.classList.remove('active'));
  sidebarItems[index].classList.add('active');

  const targetStep = steps[index];
  const firstStepTop = steps[0].offsetTop;
  const targetBottom = targetStep.offsetTop + targetStep.offsetHeight;
  const newHeight = targetBottom - firstStepTop;

  progressLine.style.height = newHeight + 'px';
}


sidebarItems.forEach((item, index) => {
  item.addEventListener('click', () => {
     isScrollingByClick = true;
    activateStep(index);

    const targetStep = steps[index];
    const elementPosition = targetStep.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
     setTimeout(() => {
      isScrollingByClick = false;
    }, 600);
  });
});


window.addEventListener('scroll', () => {
   if (isScrollingByClick) return;
  let activeIndex = 0;

  steps.forEach((step, index) => {
    const rect = step.getBoundingClientRect();

    if (rect.top - headerOffset <= 0) {
      activeIndex = index;
    }
  });

  activateStep(activeIndex);
});

window.addEventListener('load', () => {
  activateStep(0);
});




const dotContainer = document.querySelector('.progress-line-container');
const stepWrapper = document.querySelector('.step-div');
const wrapperRectTop = stepWrapper.getBoundingClientRect().top;

steps.forEach((step, index) => {
  const dot = document.createElement('div');
  dot.classList.add('progress-dot');
  dot.dataset.index = index;

  const heading = step.querySelector('h4');
  const relativeTop = heading.getBoundingClientRect().top - wrapperRectTop + heading.offsetHeight / 2;

  dot.style.top = `${relativeTop}px`;
  dotContainer.appendChild(dot);
});


// Update active dot on scroll or click
function updateDots(index) {
  document.querySelectorAll('.progress-dot').forEach(dot => {
    dot.classList.remove('active');
  });
  const currentDot = document.querySelector(`.progress-dot[data-index="${index}"]`);
  if (currentDot) currentDot.classList.add('active');
}

// Add to activateStep
function activateStep(index) {
sidebarItems.forEach(li => li.classList.remove('active'));
sidebarItems[index].classList.add('active');


  updateDots(index);

  const currentDot = document.querySelector(`.progress-dot[data-index="${index}"]`);
  const nextDot = document.querySelector(`.progress-dot[data-index="${index + 1}"]`);

  let lineHeight;

  if (nextDot) {
    const nextDotTop = parseFloat(nextDot.style.top);
    lineHeight = nextDotTop + 5;
  } else {
    // It's the last step — fill to bottom of the step container
    const stepWrapper = document.querySelector('.step-div');
    const progressTop = stepWrapper.getBoundingClientRect().top + window.scrollY;

    const lastStep = steps[index];
    const lastStepBottom = lastStep.getBoundingClientRect().bottom + window.scrollY;

    lineHeight = lastStepBottom - progressTop;
  }
   steps.forEach(s => s.classList.remove('active'));
  steps[index].classList.add('active');

  progressLine.style.height = `${lineHeight}px`;
}




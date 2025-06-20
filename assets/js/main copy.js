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
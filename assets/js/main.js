document.addEventListener('DOMContentLoaded', function () {
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
  input.focus();
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

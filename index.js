const nav = document.querySelector('#navbar');
const services = document.querySelector('#services');
const icons = document.querySelectorAll('.fa');
let topOfNav = nav.offsetHeight;
let topOfIcons = services.offsetHeight;
const styledServices = window.getComputedStyle(document.querySelector('#services'), null);

function fixNav() {
  if (window.scrollY >= topOfNav) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }
}

function showIcons() {
  if (window.scrollY >= (topOfIcons + 102)) {
    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.add('icons-enter');
    }
  } else {
    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.remove('icons-enter');
    }
  }
}

window.addEventListener('scroll', fixNav);
window.addEventListener('scroll', showIcons);

const modalButtons = document.querySelectorAll('.modal-button');
const modals = document.querySelectorAll('.modal');
const closeButton = document.querySelectorAll('.close-button');
let swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    strech: 0,
    depth: 0,
    modifier: 3,
    slideshadows: true,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 2,
    },
    1920: {
      slidesPerView: 3,
    },
  },
});
function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach((screen) => screen.classList.remove('active-screen'));
  const selectedScreen = document.getElementById(screenId);
  selectedScreen.classList.add('active-screen');
}

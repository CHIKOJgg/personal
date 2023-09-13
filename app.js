const modals = document.querySelectorAll('.modal');
const closeButton = document.querySelectorAll('.close-button');
const burgerMenu = document.querySelector('.mobile-header');
const burgerMenuButton = document.querySelector('.burger-menu');
const burgerMenuRest = document.querySelector('.burger-menu-item-wrapper');
const mobileDropdownButton = document.querySelector('.contact-me');
const dropDownItems = document.querySelector('.drop-down-items');
console.log(dropDownItems);
console.log(burgerMenuRest);
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
let isMenuOpened = burgerMenuButton.getAttribute('data-isopened');
let isDropdownMenuOpened = mobileDropdownButton.getAttribute(
  'data-is-dropdownopened'
);
burgerMenuRest.style.display = 'none';
dropDownItems.style.display = 'none';
burgerMenu.classList.add('close-menu');
burgerMenuButton.addEventListener('click', function () {
  if (isMenuOpened == 0) {
    isMenuOpened++;
    burgerMenuRest.style.display = 'block';
    burgerMenu.classList.add('open-menu');
    burgerMenu.classList.remove('close-menu');
  } else if (isMenuOpened == 1) {
    isMenuOpened--;
    burgerMenuRest.style.display = 'none';
    burgerMenu.classList.remove('open-menu');
    burgerMenu.classList.add('close-menu');
  }
});
mobileDropdownButton.addEventListener('click', function () {
  if (isDropdownMenuOpened == 0) {
    isDropdownMenuOpened++;
    dropDownItems.style.display = 'block';
    dropDownItems.style.animation = 'dropDownMenuAnim 0.4s ';
  } else if (isDropdownMenuOpened == 1) {
    isDropdownMenuOpened--;
    dropDownItems.style.display = 'none';
  }
});

function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach((screen) => screen.classList.remove('active-screen'));
  const selectedScreen = document.getElementById(screenId);
  selectedScreen.classList.add('active-screen');
}
let swiperClose = document.getElementById('swiper');

let buttons = document.querySelectorAll('.modal-button');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    let modalId = button.getAttribute('data-modal-id');

    let modal = document.getElementById(modalId);

    modal.style.display = 'block';
    swiperClose.style.display = 'none';

    let closeModalButton = modal.querySelector('.close-modal');
    closeModalButton.addEventListener('click', function () {
      modal.style.animation = 'closeModalAnim 0.5s ';
      swiperClose.style.display = 'block';
      setTimeout(() => {
        modal.style.removeProperty('animation');
        modal.style.display = 'none';
      }, 450);
    });
  });
});

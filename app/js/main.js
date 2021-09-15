document.getElementById("menu-btn").onclick = function () {
   open();
};

function open() {
   document.getElementById("menu__list").classList.toggle("menu__list--active");
   document.getElementById("menu-btn").classList.toggle("active");
}


let popupBg = document.querySelector('.video__popup');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');

openPopupButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg.classList.add('active');
      popup.classList.add('active');
   });
});

document.addEventListener('click', (e) => {
   if (e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
   }
});


let topOpenPopupButtons = document.querySelectorAll('.top__btn');
let headerOpenPopupButtons = document.querySelectorAll('.header__btn');
let headerPopupBg = document.querySelector('.header-popup');
let headerPopup = document.querySelector('.header-popup__form');

topOpenPopupButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
      e.preventDefault();
      headerPopupBg.classList.add('active');
      headerPopup.classList.add('active');
   });
});

headerOpenPopupButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
      e.preventDefault();
      headerPopupBg.classList.add('active');
      headerPopup.classList.add('active');
   });
});


document.addEventListener('click', (e) => {
   if (e.target === headerPopupBg) {
      headerPopupBg.classList.remove('active');
      headerPopup.classList.remove('active');
   }
});

let priceOpenPopupButtons = document.querySelectorAll('.price-bottom__btn');
let headerPopupOpenPopupButtons = document.querySelectorAll('.header-popup__btn');
let thanksPopupBg = document.querySelector('.thanks-popup');
let thanksPopup = document.querySelector('.thanks-popup__content');

priceOpenPopupButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
      e.preventDefault();
      thanksPopupBg.classList.add('active');
      thanksPopup.classList.add('active');
   });
});

headerPopupOpenPopupButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
      e.preventDefault();
      thanksPopupBg.classList.add('active');
      thanksPopup.classList.add('active');
   });
});


document.addEventListener('click', (e) => {
   if (e.target === thanksPopupBg) {
      thanksPopupBg.classList.remove('active');
      thanksPopup.classList.remove('active');
   }
});

let closePopupButton = document.getElementsByClassName('close-popup');
for (let close of closePopupButton) {
   close.addEventListener('click', function () {
      headerPopupBg.classList.remove('active'),
         headerPopup.classList.remove('active'),
         thanksPopupBg.classList.remove('active'),
         thanksPopup.classList.remove('active'),
         popupBg.classList.remove('active'),
         popup.classList.remove('active');
   });
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}
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
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg.classList.add('active');
      popup.classList.add('active');
   })
});

closePopupButton.addEventListener('click', () => {
   popupBg.classList.remove('active');
   popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
   if (e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
   }
});
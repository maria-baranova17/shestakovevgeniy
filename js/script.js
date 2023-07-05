// Бургер меню

const burgerButton = document.querySelector(".header__burger-button");
const navigation = document.querySelector(".navigation");
const catalogButtonLink = document.querySelector('.catalog-link')
const secondColumn = document

if (burgerButton) {
  burgerButton.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    burgerButton.classList.toggle("_active");
    navigation.classList.toggle("_active");
  });
}

function onNavigationClick(e) {
    document.body.classList.remove("_lock");
    burgerButton.classList.remove("_active");
    navigation.classList.remove("_active");
}

navigation.addEventListener("click", onNavigationClick);

// if (catalogButtonLink) {addEventListener('click', function(e) {
//   document.
// })}

// const swiper = new Swiper('.swiper', {
//   loop: true,
//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// var swiper = new Swiper(".mySwiper", {
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
const welcome = document.querySelector(".welcome");
const welcomeButton = document.querySelector(".welcome__button");
const quizSwiper = document.querySelector(".quiz-swiper");
//Открытие слайдера с тестом
welcomeButton.addEventListener("click", (e) => {
  welcome.classList.add("welcome_close");
  quizSwiper.classList.add("quiz-swiper_open");
});
//инициализация слайдера
const swiper = new Swiper(".swiper", {
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
  },
});
//показ кнопок перехода и завершения
const navigationButton = document.querySelector(".quiz-swiper__button");
const finishButton = document.querySelector(".quiz-swiper__button-finish");
const swiperWrapper = document.querySelector(".swiper-wrapper");
swiperWrapper.addEventListener("click", (e) => {
  if (e.target.closest(".question__answer")) {
    navigationButton.classList.remove("swiper-button-hidden");

    if (swiper.isEnd) {
      navigationButton.classList.add("quiz-swiper__button_lock");
      finishButton.classList.add("quiz-swiper__button-finish_visible");
    }
  }
});
swiper.on("slideChange", function (e) {
  navigationButton.classList.add("swiper-button-hidden");
});
//Модальное окно
const popupLink = document.querySelector(".popup-open");
const popup = document.getElementById("popup");
const popupClose = document.querySelector(".popup__close");
popupLink.addEventListener("click", (e) => {
  popup.classList.add("open");
});

popupClose.addEventListener("click", (e) => {
  popup.classList.remove("open");
});

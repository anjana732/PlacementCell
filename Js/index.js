const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;
let intervalId = null;

function changeSlide() {
  if (currentSlide === carouselInner.children.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startTimer() {
  intervalId = setInterval(changeSlide, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

startTimer();

prevButton.addEventListener('click', () => {
  stopTimer();
  if (currentSlide === 0) {
    currentSlide = carouselInner.children.length - 1;
  } else {
    currentSlide--;
  }

  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
  startTimer();
});

nextButton.addEventListener('click', () => {
  stopTimer();
  changeSlide();
  startTimer();
});

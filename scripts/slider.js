const slider = Array.from(document.querySelectorAll('.slider-card'));
let currentSlide = 0;
const ACTIVE_CLASS = 'slider-card--active';

function showNext() {
  slider[currentSlide].classList.remove('slider-card--active');
  currentSlide++;
  if (slider[currentSlide]) {
    slider[currentSlide].classList.add('slider-card--active');
  } else {
    currentSlide = 0;
    slider[currentSlide].classList.add('slider-card--active');
  }
};

function showPrev() {
  slider[currentSlide].classList.remove('slider-card--active');
  currentSlide--;
  if (slider[currentSlide]) {
    slider[currentSlide].classList.add('slider-card--active');
  } else {
    currentSlide = slider.length - 1;
    slider[currentSlide].classList.add('slider-card--active');
  }
};

let nextButton = document.querySelector('.slider-control__btn--next');
nextButton.onclick = (evt) => {
  showNext();
};

let prevButton = document.querySelector('.slider-control__btn--prev');
prevButton.onclick = (evt) => {
  showPrev();
};

console.log(slider);

/*slider.forEach((item) => item.onclick = (evt) => {
  showNext();
})

slider[currentSlide].classList.add('slider-card--active');*/

/*
function changeSlider(slideNumber) {
  slider[currentSlide].classList.remove(ACTIVE_CLASS);  
  currentSlide = slideNumber;
  slider[currentSlide].classList.add(ACTIVE_CLASS);  
}
*/
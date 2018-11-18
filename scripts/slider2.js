const slider = Array.from(document.querySelectorAll('.slider-card'));
const pagination = Array.from(document.querySelectorAll('.slider-pagination__btn'));
let currentSlide = 0;
let currentPagin = 0;
const SLIDER_ACTIVE_CLASS = 'slider-card--active';
const PAGIN_ACTIVE_CLASS = 'slider-pagination__btn--active';


function showNext() { 
  let nextSlide = currentSlide;   
  if (currentSlide < slider.length - 1) {    
    nextSlide++;
  } else {    
    nextSlide = 0;
  }
  return nextSlide;
};

function btnNext() { 
  let nextBtn = currentPagin;   
  if (currentPagin < pagination.length - 1) {    
    nextBtn++;
  } else {    
    nextBtn = 0;
  }
  return nextBtn;
};

function showPrev() { 
  let nextSlide = currentSlide;   
   if (nextSlide > 0) {
    nextSlide--;
  } else {
    nextSlide = slider.length - 1;    
  }
  return nextSlide;
};

function btnPrev() { 
  let nextBtn = currentPagin;   
  if (nextBtn > 0) {    
    nextBtn--;
  } else {    
    nextBtn = pagination.length - 1;
  }
  return nextBtn;
};

function changeSlide(nextSlide) {
  slider[currentSlide].classList.remove(SLIDER_ACTIVE_CLASS);
  currentSlide = nextSlide;
  slider[currentSlide].classList.add(SLIDER_ACTIVE_CLASS);
}

function changePagination(nextBtn) {
  pagination[currentPagin].classList.remove(PAGIN_ACTIVE_CLASS);  
  currentPagin = nextBtn;
  pagination[currentPagin].classList.add(PAGIN_ACTIVE_CLASS);
}



let nextButton = document.querySelector('.slider-control__btn--next');
nextButton.onclick = function() {
  changeSlide(showNext());
  changePagination(btnNext());
};

let prevButton = document.querySelector('.slider-control__btn--prev');
prevButton.onclick = function() {
  changeSlide(showPrev());
  changePagination(btnPrev());
};





console.log(slider);
console.log(pagination);

/*slider.forEach((item) => item.onclick = (evt) => {
  showNext();
})

slider[currentSlide].classList.add('slider-card--active');*/
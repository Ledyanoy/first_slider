const slider = Array.from(document.querySelectorAll('slider-card'));
let currentSlider = 0;

function showNext() {
  slider[currentSlider].classList.remove(`active`);
  currentDiv++;
  if (divEls[currentDiv]) {
    divEls[currentDiv].classList.add(`active`);
  } else {
    alert(`Конец`)
  }
}

divEls.forEach((item) => item.onclick = (evt) => {
  showNext();
})

divEls[currentDiv].classList.add(`active`);
const divEls = Array.from(document.querySelectorAll(`div`));
let currentDiv = 0;

function showNext() {
  divEls[currentDiv].classList.remove(`active`);
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
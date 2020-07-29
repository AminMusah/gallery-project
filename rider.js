const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const image = document.querySelectorAll('.image');
let currently = 0;

next.addEventListener('click', function () {
  image[currently].classList.remove('active');
  currently++;
  image[currently].classList.add('active');
  prev.disabled = false;
  
  if (image.length === currently + 1){
    next.disabled = true;
  }
})

prev.addEventListener('click', function () {
  image[currently].classList.remove('active');
  currently--;
  image[currently].classList.add('active');
  prev.disabled = false;

  if (currently === 0){
    prev.disabled = true;
    next.disabled = false;
  }
})
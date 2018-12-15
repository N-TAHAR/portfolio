var initial = document.querySelectorAll('.logo__initial');
var arrow = document.querySelector('.homePage__arrow');
var time = 0;

for (let i = 0; i < initial.length; i++) {
  setTimeout(function() {
    initial[i].classList.add('initial--reset');
  }, time);
}

time+= 1500;
setTimeout(function() {
  initial[1].classList.remove('initial--reset');
  initial[4].classList.remove('initial--reset');
  arrow.classList.add('arrow--reset');
}, time);
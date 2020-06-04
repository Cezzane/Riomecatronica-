const burgerBtn = document.querySelector(".nav__burgerMenu");
const navMenu = document.querySelector(".nav__menu");
const closeBtn=document.querySelector('.closeBtn')
burgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle('show');
});
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle('show');
});

const counter_el = document.querySelector(".countS");
const counter_el2 = document.querySelector(".countS2");

let count = 0;
let count2 = 400;
setInterval(() => {
  if (count < 12) {
    count++;
    counter_el.innerText = count;
  }
}, 100);

setInterval(() => {
  if (count2 < 654) {
    count2++;
    counter_el2.innerText = count2;
  }
}, 10);

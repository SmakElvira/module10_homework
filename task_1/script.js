const btn = document.querySelector('.j-btn-test');
const icon1 = document.querySelector('.bi-arrow-down-left-circle');
const icon2 = document.querySelector('.bi-arrow-down-left-circle-fill');

btn.addEventListener('click', changeIcon);

function changeIcon() {
      icon1.classList.toggle('active');
      icon2.classList.toggle('active');
}
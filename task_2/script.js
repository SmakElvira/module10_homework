const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', getScreenSize);

function getScreenSize() {
  let widthScreen = window.screen.width;
  let heightScreen = window.screen.height;
  window.alert(`Ширина экрана: ${widthScreen}. Высота экрана: ${heightScreen}`);
}
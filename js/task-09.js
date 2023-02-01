function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const body = document.querySelector('body');

btnChangeColor.addEventListener('click', () => {
  textColor.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
})
const input = document.querySelector('input');
const dataLength = input.getAttribute('data-length');

input.addEventListener("blur", (event) => {
  if(event.currentTarget.value === dataLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
});
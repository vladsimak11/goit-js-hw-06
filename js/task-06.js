const input = document.querySelector('input');
let dataLength = input.getAttribute('data-length');

input.addEventListener("blur", (event) => {
  
  if(event.currentTarget.textLength === Number(dataLength)) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }

});
const input = document.querySelector('input');
let dataLength = input.getAttribute('data-length');

input.addEventListener("blur", (event) => {
  
  if(event.target.textLength === Number(dataLength)) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }

});
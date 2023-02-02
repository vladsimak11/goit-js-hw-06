const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
  nameOutput.textContent = event.target.value;
  if(event.target.value === '') {
    nameOutput.textContent = 'Anonymous';
  }
})
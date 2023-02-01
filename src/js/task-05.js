const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
  console.log(event.currentTarget.value);
  nameOutput.textContent = event.currentTarget.value;
  if(event.currentTarget.value === '') {
    nameOutput.textContent = 'Anonymous';
  }
})
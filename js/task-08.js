const form = document.querySelector('.login-form');

form.addEventListener('click', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(`Заповніть всі поля!`);
  }
  
  console.log(
   {
    email: email.value,
    password: password.value,
  }
  );

  event.currentTarget.reset();
};
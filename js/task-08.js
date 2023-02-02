const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(`Заповніть всі поля!`);
  }

  console.log(`Логін: ${email.value}, Пароль: ${password.value}`);

  event.currentTarget.reset();
};
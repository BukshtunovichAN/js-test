const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formValues = {};
  formData.forEach((value, name) => {
    formValues[name] = value;
    // console.log("name:", name);
    // console.log("value:", value);
  });
  const email = formValues.email;
  const password = formValues.password;

  if (!email || !password) {
    const massage = "Все поля должны быть заполнены!";
    alert(massage);
  } else {
    refs.form.reset();
    console.log(formValues);
  }
}

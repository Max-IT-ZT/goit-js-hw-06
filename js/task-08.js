const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formObject = Object.fromEntries(formData.entries());
  if (formObject.email === "" || formObject.password === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    console.log(formObject);
    loginForm.reset();
  }
}

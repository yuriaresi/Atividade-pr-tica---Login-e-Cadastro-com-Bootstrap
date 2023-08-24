//
const toastElement = document.querySelector('.toast');
const toast = new bootstrap.Toast(toastElement);

//
// const loggedUserId = sessionStorage.getItem('userId');
// if (loggedUserId)
//   window.location.href = "messages.html";

let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");

//
// let currentEmail = localStorage.getItem("email");
// if (! currentEmail)
  currentEmail = "teste1@teste.com";

inputEmail.value = currentEmail;

// if (currentEmail === "teste1@teste.com")
  inputPassword.value = "teste1";

//
function setEnabled(enabled) {
  const disabled = !enabled;
  inputEmail.disabled = disabled;
  inputPassword.disabled = disabled;
  const submitButton = document.querySelector("#btn-login")
  submitButton.disabled = disabled;
  document.querySelector("button").disabled = disabled;

  if (disabled) {
    submitButton.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>`;
  }
  else
  {
    submitButton.innerHTML = "Login";
  }
}

function showSuccessToast(msg) {
  toastElement.classList.add('text-bg-success');
  toastElement.classList.remove('text-bg-danger');
  document.querySelector('.toast-body').innerHTML = 
    `<i class="bi bi-check-circle-fill"></i> ${msg}`;

  toast.show();
}

function showErrorToast(msg) {
  toastElement.classList.remove('text-bg-success');
  toastElement.classList.add('text-bg-danger');
  document.querySelector('.toast-body').innerHTML = 
    `<i class="bi bi-exclamation-triangle-fill"></i> ${msg}`;

  toast.show();
}


function formSubmit(event)
{
  event.preventDefault();

  setEnabled(false);

  axios.post("https://api-recados-7pfq.onrender.com/login", {
    email: inputEmail.value,
    senha: inputPassword.value,
  })
  .then((response) => {
    showSuccessToast(response.data.mensagem);

//    localStorage.setItem("email", inputEmail.value);
//    sessionStorage.setItem("userId", response.data.id);
//    window.location.href = "messages.html";
  })
  .catch((error) => {
    console.log(error);
    showErrorToast(error.response.data);
  })
  .finally(() => setEnabled(true));
}
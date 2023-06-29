// !-------------Formulario-------------
let enviar = document.getElementById("enviar");
let enviado = document.getElementById("mensaje-exitoso");
let error = document.getElementById("mensaje-error");

let nombre = document.getElementById("nombre");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let textMensaje = document.getElementById("textMensaje");

enviar.addEventListener("click", function validar() {
  let regExpNombre = /^\s*\S+\s*$/;
  let regExpPhone = /^(?:(\+\d{1,2}\s\d{10})|(\d{11}))$/; 
  let regExpEmail = /^\S+@\S+\.\S+$/;
  let regExpMensaje = /^\s*\S.*$/;

  if (
    regExpNombre.test(nombre.value) == true &&
    regExpPhone.test(phone.value) == true &&
    regExpEmail.test(email.value) == true &&
    regExpMensaje.test(textMensaje.value) == true
  ) {
    nombre.value = "";
    phone.value = "";
    email.value = "";
    textMensaje.value = "";
    enviado.style.display = "block";
    setTimeout(function () {
      enviado.style.display = "none";
    }, 4000);
  } else {
    error.style.display = "block";
    setTimeout(function () {
      error.style.display = "none";
    }, 2000);
  }
});

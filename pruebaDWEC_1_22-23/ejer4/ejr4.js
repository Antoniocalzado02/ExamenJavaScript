const uName =document.getElementById("name");
const email =document.getElementById("mail");

uName.addEventListener("input", function (event) {
    if (uName.isblanc) {
      uName.setCustomValidity("El nombre no es correcto");
    } else if(uName.isrequired) {
      uName.setCustomValidity("");
    }
  });

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Introduzca un email correcto");
  } else {
    email.setCustomValidity("");
  }
});


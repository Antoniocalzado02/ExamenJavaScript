//Obtén todos los campos del formulario y el propio formulario.
const usernameEl=document.querySelector('#name');
const emailEl=document.querySelector('#mail');
const passwordEl=document.querySelector('#password');
const confirmPasswordEl=document.querySelector('#confirmation')
const checkbocEl=document.querySelector('#checkbox')

const form=document.querySelector('#form');

//Funciones de validación

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isCheckedRadio = radios => {
    let valid=false;
    for (let i=0;i<radios.length;i++) {
        if (radios[i].checked){
            valid = true;  
        }
    }
    return valid;
}

// Función que valida si hay al menos un checkbox validado
const checkbox = () =>{
    let valid = false;
    const checkboxE = checkbocEl.value.trim();

    if (!isRequired(checkbocEl)) { 
        showError(checkbocEl, 'Selecciona al menos 1 campo');
    } else if (checkbocEl!="Development" && checkbocEl!="Design" && checkbocEl!="Business") {  
        showError(checkbocEl, `Debes introducir Development, Design o Business.`)
    } else {
        showSuccess(checkbocEl);
        valid = true;
    }
    return valid;
}

// Funciones para validar cada campo


const checkUsername = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const username = usernameEl.value.trim();

    if (!isRequired(username)) { 
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) { 
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'El email es requerido');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'El email no es valido')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

const checkPassword= () => { 

    let valid = false;
    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'El campo no puede estar en blanco');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, `La contraseña debe tener 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial (!@#$%^&*)`)
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
}

const checkConfirmPassword = () => { 
    let valid = false;
    
    const confirmPassword = passwordEl.value.trim();
    const confirmPasswordEle = confirmPasswordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEle, 'Introduce la contraseña');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEle, 'La contraseña no coincide');
    } else {
        showSuccess(confirmPasswordEle);
        valid = true;
    }

    return valid;
};



form.addEventListener('submit', function (e){

    let isCheckBox=checkbox();
    let isUsernameValid=checkUsername();
    let isEmailConfirmed=checkEmail();
    let isPasswordValid=checkPassword();
    let isPasswordConfirmed=checkConfirmPassword();

    let isFormValid=isCheckBox && isUsernameValid &&  isPasswordValid && isPasswordConfirmed && isEmailConfirmed;

    if (!isFormValid){
        e.preventDefault();
    }

})

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'name':
            checkUsername();
            break;
        case 'checkbox':
            checkbox();
            break;
        case 'password':{
            checkPassword();
            break;
        }
        case 'confirmation':{
            checkConfirmPassword();
            break;
        }
        case 'mail':{
            checkEmail();
            break;
        }
    }
});



// Funciones para mostrar y borrar errores

const showError = (input, message) => {
   
    const formfield = input.parentElement;

    const error = formfield.querySelector("small");
    error.textContent = message;
};

const showSuccess = (input) => {
   
    const formfield = input.parentElement;

    const error = formfield.querySelector("small");
    error.textContent = "";
}


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
    
   
})

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
})


let isValid = false
let passwordsMatch = false

function validateForm(){
    //Using Contrains API
    isValid = div.panels-container.checkValidity()
    //Style main message for an error
    if (!isValid) {
        message.textContent = 'Porfavor llenar todos los campos'
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        return
    }
    //Check to see if passwords match
    if (password1El.value == password2El.value) {
        passwordsMatch = true
        password1El.style.borderColor = 'green'
        password2El.style.borderColor = 'green'
    } else {
        passwordsMatch = false
        message.textContent = 'Make sure passwords match'
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        password1El.style.borderColor = 'red'
        password2El.style.borderColor = 'red'
        return
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Registrado Exitosamente'
        message.style.color = 'green'
        messageContainer.style.borderColor = 'green'
    }
}
function storeFormData(){
    const Username = {
        Username: form.Username.value,
        phone: div.panels-container.phone.value,
        Email: div.panels-container.Email.value,
        password: div.panels-container.password.value
    }
    //Do something con user data
    console.log(Username)
}
function processFormData(e) {
    e.preventDefault()
    console.log(e)
    // Validate Form
    validatediv.panels-container()
    // Submit Data if Valid
    if (isValid && passwordsMatch ) {
        storediv.panels-containerData()
    }
}

//Event Listener
div.panels-container.addEventListener('submit', processdiv.panels-containerData)
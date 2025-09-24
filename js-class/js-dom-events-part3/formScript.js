const form = document.getElementById('loginForm');
const submitButton = document.getElementById('submitBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');
const termsAndConditions = document.getElementById('openModalBtn')

const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
const passwordRegex = /^.{6,}$/;

const validateInputs = () => {
    let isValid = true;

    if (!usernameRegex.test(usernameInput.value)) {
        usernameError.textContent = 'Username must be between 3 and 15 characters'
        isValid = false
    } else {
        usernameError.textContent = '';
    }

    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 6 characters long'
        isValid = false
    } else {
        passwordError.textContent = '';
    }

    return isValid;
}

const toggleSubmitButton = () => {
    if (!validateInputs()) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

usernameInput.addEventListener('input', toggleSubmitButton);
passwordInput.addEventListener('input', toggleSubmitButton);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateInputs()) {
        successMessage.textContent = 'Login Successful!';
        successMessage.style.display = 'block';
        form.reset();
    }
})

const modal = document.getElementById('myModal')
const closeModal = document.getElementById('closeModalBtn')

termsAndConditions.addEventListener('click' , () => {
    modal.style.display = 'block';
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'
    })
})
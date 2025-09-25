// Form related helpers
/**
 * Show message on form validation
 * @param {*} input 
 * @param {*} message 
 * @param {*} type 
 * @returns 
 */
const showMessage = (input, message, type) => {
  const parentElement = input.parentNode;
  const messageElement = parentElement.querySelector('#error-msg');
  messageElement.innerText = message;
  if (type) {
    input.classList.remove('is-invalid'); 
  } else {
    input.classList.add('is-invalid'); 
  }
  return type;
}

/**
 * Show error validation message
 * @param {*} input 
 * @param {*} message 
 * @returns 
 */
const showError = (input, message) => showMessage(input, message, false);

/**
 * Show success validation message
 * @param {*} input 
 * @returns 
 */
const showSuccess = (input) => showMessage(input, '', true);

/**
 * Check if the input value is empty and return a message
 * @param {*} input 
 * @param {*} message 
 * @returns 
 */
const hasValue = (input, message) => input.value.trim() === '' ? showError(input, message) : showSuccess(input);

/**
 * Validate email address input field
 * @param {*} input 
 * @returns 
 */
const validateEmail = (input) => {
  if (!hasValue(input, 'Email is required')) {
    return false;
  }

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailValue = input.value.trim();
  if (!emailRegex.test(emailValue)) {
    return showError(input, 'Invalid email address');
  }
  return true;
}

/**
 * Validate password field
 * @param {*} input 
 * @returns 
 */
const validatePassword = (input) => {
  if (!hasValue(input, 'Password is required')) {
    return false;
  }

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

  const passwordValue = input.value.trim();
  if (!passwordRegex.test(passwordValue)) {
    return showError(input, 'The password should contain an upper case, lower case and a number');
  }
  return true;
}

/**
 * Name validation helper
 */
const validateFullName = (input) => {
  if (!hasValue(input, 'Name is required')) {
    return false;
  }

  const fullNameRegex = /[a-zA-z]+\s[a-zA-z]/;

  const fullNameValue = input.value.trim();
  if (!fullNameRegex.test(fullNameValue)) {
    return showError(input, 'Please enter valid name');
  }
  return true;
}

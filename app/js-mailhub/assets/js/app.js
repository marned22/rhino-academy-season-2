const bookmarkedMessages = []; // Array to store bookmarked messages
const favoriteMessages = []; // Array to store favorite messages
const trashMessages = []; // Array to store trashed messages
let searchTimeout;

// Authentication event handlers
function setupAuthenticationHandlers() {
  // Navigation bar login/register buttons
  document.getElementById('login-btn')?.addEventListener('click', () => {
    viewService.showLoginForm();
  });

  document.getElementById('register-btn')?.addEventListener('click', () => {
    viewService.showRegisterForm();
  });

  // Main welcome buttons
  document.getElementById('main-show-login')?.addEventListener('click', () => {
    viewService.showLoginForm();
  });

  document.getElementById('main-show-register')?.addEventListener('click', () => {
    viewService.showRegisterForm();
  });

  // Form switch links
  document.getElementById('show-register')?.addEventListener('click', (e) => {
    e.preventDefault();
    viewService.showRegisterForm();
  });

  document.getElementById('show-login')?.addEventListener('click', (e) => {
    e.preventDefault();
    viewService.showLoginForm();
  });

  // Login form submission
  const loginForm = document.querySelector('#login-form form');
  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleLogin();
  });

  // Register form submission
  const registerForm = document.querySelector('#register-form form');
  registerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleRegister();
  });

  // Logout button
  document.getElementById('logout-btn')?.addEventListener('click', () => {
    handleLogout();
  });
}

function handleLogin() {
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');

  const isEmailValid = validateEmail(emailInput);
  const isPasswordValid = validatePassword(passwordInput);

  if (isEmailValid && isPasswordValid) {
    const success = authService.login(emailInput.value, passwordInput.value);
    
    if (success) {
      viewService.showMainApp();
      emailInput.value = '';
      passwordInput.value = '';
    } else {
      showError(emailInput, 'Invalid email or password');
    }
  }
}

function handleRegister() {
  const nameInput = document.getElementById('register-name');
  const emailInput = document.getElementById('register-email');
  const passwordInput = document.getElementById('register-password');
  const confirmPasswordInput = document.getElementById('register-confirm-password');

  const isNameValid = validateFullName(nameInput);
  const isEmailValid = validateEmail(emailInput);
  const isPasswordValid = validatePassword(passwordInput);
  
  let isConfirmValid = true;
  if (passwordInput.value !== confirmPasswordInput.value) {
    showError(confirmPasswordInput, 'Passwords do not match');
    isConfirmValid = false;
  } else {
    showSuccess(confirmPasswordInput);
  }

  if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
    const success = authService.register(nameInput.value, emailInput.value, passwordInput.value);
    
    if (success) {
      viewService.showMainApp();
      nameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
      confirmPasswordInput.value = '';
    }
  }
}

function handleLogout() {
  authService.logout();
  viewService.showLoggedOutView();
}

function initializeApp() {
  if (authService.isLoggedIn()) {
    viewService.showMainApp();
  } else {
    viewService.showLoggedOutView();
  }
}

// Display functions using services
function displayInboxMessages() {
  const messages = messageService.getInboxMessages();
  const inboxContainer = DOMHelper.clearContainer("inbox-container");

  messages.forEach((message) => {
    const messageElement = DOMHelper.createElement(message, true);
    inboxContainer.appendChild(messageElement);
  });
}

function displayBookmarkedMessages() {
  const messages = messageService.getBookmarkedMessages();
  const container = DOMHelper.clearContainer("bookmark-container");
  
  messages.forEach((message) => {
    const messageElement = DOMHelper.createElement(message, false);
    container.prepend(messageElement);
  });
}

function displayFavoriteMessages() {
  const messages = messageService.getFavoriteMessages();
  const container = DOMHelper.clearContainer("favourites-container");
  
  messages.forEach((message) => {
    const messageElement = DOMHelper.createElement(message, false);
    container.prepend(messageElement);
  });
}

function displayTrashMessages() {
  const messages = messageService.getTrashMessages();
  const container = DOMHelper.clearContainer("trash-container");
  
  messages.forEach((message) => {
    const messageElement = DOMHelper.createElement(message, false);
    container.prepend(messageElement);
  });
}

window.onload = function () {
  setupAuthenticationHandlers();
  initializeApp();
  viewService.initializeMessageContainers();
  displayInboxMessages();
  displayBookmarkedMessages();
  displayFavoriteMessages();
  displayTrashMessages();
};

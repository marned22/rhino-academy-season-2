class ViewService {
  constructor() {
    this.elements = {
      loggedOutView: document.getElementById('logged-out-view'),
      loginForm: document.getElementById('login-form'),
      registerForm: document.getElementById('register-form'),
      mainContainer: document.getElementById('main-container'),
      
      searchField: document.getElementById('search-field'),
      welcomeLabel: document.getElementById('welcome-label'),
      loginBtn: document.getElementById('login-btn'),
      registerBtn: document.getElementById('register-btn'),
      logoutBtn: document.getElementById('logout-btn'),

      inboxTab: document.getElementById('nav-inbox-tab'),
      inboxContent: document.getElementById('nav-inbox')
    };

    if (this.elements.loginBtn) {
      this.elements.loginBtn.classList.add('hide');
      this.elements.loginBtn.remove();
      this.elements.loginBtn = null;
    }
    if (this.elements.registerBtn) {
      this.elements.registerBtn.classList.add('hide');
      this.elements.registerBtn.remove();
      this.elements.registerBtn = null;
    }
  }

  showLoggedOutView() {
    console.log('Showing logged out view');
    const loggedOut = this.elements.loggedOutView;
    if (loggedOut) {
      loggedOut.classList.remove('hide');
      loggedOut.style.display = '';
      loggedOut.hidden = false;
    }

    this.elements.welcomeLabel?.classList.remove('hide');
    if (this.elements.loginBtn) this.elements.loginBtn.classList.add('hide');
    if (this.elements.registerBtn) this.elements.registerBtn.classList.add('hide');
    if (this.elements.loginForm) {
      this.elements.loginForm.classList.add('hide');
      this.elements.loginForm.style.display = 'none';
      this.elements.loginForm.hidden = true;
    }
    if (this.elements.registerForm) {
      this.elements.registerForm.classList.add('hide');
      this.elements.registerForm.style.display = 'none';
      this.elements.registerForm.hidden = true;
    }

    if (this.elements.mainContainer) {
      this.elements.mainContainer.classList.add('hide');
      this.elements.mainContainer.style.display = 'none';
      this.elements.mainContainer.hidden = true;
    }

    this.elements.searchField.classList.add('hide');
    this.elements.logoutBtn.classList.add('hide');
  }

  showLoginForm() {
    console.log('Showing login form');
    const login = this.elements.loginForm;
    if (login) {
      login.classList.remove('hide');
      login.style.display = '';
      login.hidden = false;
    }

    const loggedOut = this.elements.loggedOutView;
    if (loggedOut) {
      loggedOut.classList.add('hide');
      loggedOut.style.display = 'none';
      loggedOut.hidden = true;
    }

    if (this.elements.registerForm) {
      this.elements.registerForm.classList.add('hide');
      this.elements.registerForm.style.display = 'none';
      this.elements.registerForm.hidden = true;
    }

    if (this.elements.mainContainer) {
      this.elements.mainContainer.classList.add('hide');
      this.elements.mainContainer.style.display = 'none';
      this.elements.mainContainer.hidden = true;
    }

    this.clearFormErrors();
  }

  showRegisterForm() {
    console.log('Showing register form');
    const register = this.elements.registerForm;
    if (register) {
      register.classList.remove('hide');
      register.style.display = '';
      register.hidden = false;
    }

    const loggedOut = this.elements.loggedOutView;
    if (loggedOut) {
      loggedOut.classList.add('hide');
      loggedOut.style.display = 'none';
      loggedOut.hidden = true;
    }

    if (this.elements.loginForm) {
      this.elements.loginForm.classList.add('hide');
      this.elements.loginForm.style.display = 'none';
      this.elements.loginForm.hidden = true;
    }

    if (this.elements.mainContainer) {
      this.elements.mainContainer.classList.add('hide');
      this.elements.mainContainer.style.display = 'none';
      this.elements.mainContainer.hidden = true;
    }

    this.clearFormErrors();
  }

  showMainApp() {
    console.log('Showing main app');
    if (this.elements.mainContainer) {
      this.elements.mainContainer.classList.remove('hide');
      this.elements.mainContainer.style.display = '';
      this.elements.mainContainer.hidden = false;
    }
    
    this.elements.searchField.classList.remove('hide');
    this.elements.logoutBtn.classList.remove('hide');
    const loggedOut = document.getElementById('logged-out-view');
    if (loggedOut) {
      loggedOut.classList.add('hide');
      loggedOut.style.display = 'none';
      loggedOut.hidden = true;
    }

    document.querySelectorAll('.auth-welcome, .auth-container').forEach(el => {
      el.classList.add('hide');
      el.style.display = 'none';
      el.hidden = true;
    });
    
    this.elements.welcomeLabel?.classList.add('hide');
    this.elements.loginBtn?.classList.add('hide');
    this.elements.registerBtn?.classList.add('hide');

    this.activateInboxTab();
  }

  activateInboxTab() {
    console.log('Activating inbox tab');
    // Remove active from all tabs
    document.querySelectorAll('.nav-link').forEach(tab => {
      tab.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('show', 'active');
    });
    this.elements.inboxTab.classList.add('active');
    this.elements.inboxContent.classList.add('show', 'active');
  }

  clearFormErrors() {
    const errorElements = document.querySelectorAll('.invalid-feedback');
    const inputElements = document.querySelectorAll('.is-invalid');
    
    errorElements.forEach(el => el.innerText = '');
    inputElements.forEach(el => el.classList.remove('is-invalid'));
  }

  initializeMessageContainers() {
    if (typeof MessageActions !== 'undefined') {
      MessageActions.setupMessageButtons();
    }
    if (typeof searchHelper !== 'undefined') {
      searchHelper.setupSearch();
    }
  }
}

const viewService = new ViewService();
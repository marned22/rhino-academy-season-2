class AuthService {
  constructor() {
    this.isAuthenticated = false;
    this.currentUser = null;
  }

  login(email, password) {
    if (email && password) {
      this.isAuthenticated = true;
      this.currentUser = { email: email };
      return true;
    }
    return false;
  }

  register(name, email, password) {
    if (name && email && password) {
      this.isAuthenticated = true;
      this.currentUser = { name: name, email: email };
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUser = null;
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}

const authService = new AuthService();
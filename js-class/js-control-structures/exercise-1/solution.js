function hasMinimumLength(password) {
  if(password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

function hasSpecialCharacter(password) {
  if(password.includes("!" || "@" || "#" || "$" || "%" || "^" || "&" || "*" || "(" || ")") ) {
    return true;
  } else {
    return false;
  }
}

function hasUpperCaseAndNumber(password) {
  if(password.match(/[A-Z]/) && password.match(/[1-9]/)) {
    return true;
  } else {
    return false;
  }
}

function isStrongPassword(password) {
  if((hasMinimumLength(password)) && (hasSpecialCharacter(password)) && (hasUpperCaseAndNumber(password))) {
    console.log('Strong password');
  } else {
    console.log('Weak password')
  }
}

isStrongPassword('Martin1!')
isStrongPassword('Martin1')
isStrongPassword('ma123')
isStrongPassword('martin1!')

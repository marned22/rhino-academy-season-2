## Password validator

Write a program to check the strength of a password based on specific criteria. The program should use multiple functions to break down the checks into smaller logical units, to ensure clear structure.

### Features
1. Validate the minimum length
2. Check for a special character
3. Ensure that the password contains at least one uppercase letter and one number.

### Steps to implement:
1. Write a function `hasMinimumLength(password)` to check if the password is at least 8 characters long. <br>
    - Input: Password
    - Output: `true` if the password is 8 or more characters long, otherwise `false`.
2. Write a function `hasSpecialCharacter(password)` to check if the password contains a special character.
    - Input: Password
    - Output: `true` if the password contains a special character, otherwise `false`.
3. Write a function `hasUppercaseAndNumber(password)` to check if the password contains at least one uppercase letter and one number.
    - Input: Password
    - Output: `true` if the password contains at least one uppercase letter and a digit, otherwise `false`.
4. Write a function `isStrongPassword(password)` that combines all these checks.
    - If all of the checks combined are passed, the password is considered a strong password.
    - Input: Password
    - Output: A message that will indicate if the password is strong or weak

Examples:
```
Input: Qwerty1!
Checks:
    - minimum length: 8
    - special character: !
    - uppercase and number: Q and 1

Output: Strong password
```

```
Input: qwerty1
Checks:
    - minimum length: 7
    - special character: none
    - uppercase and number: none
Output: Weak password
```
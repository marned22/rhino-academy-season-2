const emptyUserName = document.getElementById('username')
const emptyPassword = document.getElementById('password')
const form = document.getElementById('loginForm')
const message = document.getElementById('message')


emptyUserName.addEventListener('focus', () => {
    message.style.color = 'LightCoral'
    message.textContent = 'Please enter your username'
})

emptyPassword.addEventListener('focus', () => {
    message.style.color = 'LightCoral'
    message.textContent = 'Please enter your password'
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(!emptyUserName.value && !emptyPassword.value){
        message.style.color = 'red'
        message.textContent = 'Fill empty fields'
    } else {
        message.style.color = 'green'
        message.textContent = `Hello ${emptyUserName.value}`
    }
})
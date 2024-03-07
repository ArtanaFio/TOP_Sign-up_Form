/* Apply event listenters to the "Create Account" button to listen to the form inputs */

const button = document.querySelector('button');
const password = document.getElementById('pwd');
const confirm = document.getElementById('confirm');
const passwordErrorMessage = document.getElementById('error-msg');

button.addEventListener('click', () => {
    if (confirm !== password) {
        password.classList.add('error');
        confirm.classList.add('error');
        passwordErrorMessage.style.color = 'red';
    }
});


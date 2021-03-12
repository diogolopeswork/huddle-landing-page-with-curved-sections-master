const input = document.getElementById('email');
const subButton = document.querySelector('.btn__subscribe');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const error = document.querySelector('.error');
subButton.addEventListener('click', () => {
    if(!emailRegex.test(input.value)) {
        error.style.display = 'block';  
    } else {
        error.style.display = 'none';
    }
})

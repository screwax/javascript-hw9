const open = document.querySelector('.button[data-action=open-modal]');
const close = document.querySelector('.button[data-action=close-modal]');
const body = document.querySelector('body');
open.addEventListener('click', () => {
    body.classList.add("show-modal");
});
close.addEventListener('click', () => {
    body.classList.remove("show-modal");
});

const changeColor = document.querySelector('form');
body.style.backgroundColor = 'red';

document.querySelector('form').addEventListener('click', (event) => {
    body.style.backgroundColor = event.target.value;
});

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', () => {
    textOutput.textContent = textInput.value;
});

const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', () => {
    console.log(validationInput.value.length);
    if(validationInput.value.length == validationInput.getAttribute("data-length")){
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    }
    else{
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
});

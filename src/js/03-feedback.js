import throttle from 'lodash.throttle';

const STORAGE_INPUT_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const inputRef = document.querySelector('.feedback-form input');

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);

messageInputBeforeFault();

const allInputData = {};

function onInput(e) {
    // console.log(e.target.name)
    // console.log(e.target.value);
    allInputData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_INPUT_KEY, JSON.stringify(allInputData));
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log(allInputData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_INPUT_KEY);
}

function messageInputBeforeFault() {

    const savedMessageInput = localStorage.getItem(STORAGE_INPUT_KEY);
    const parsedSavedMessageInput = JSON.parse(savedMessageInput);

    if (parsedSavedMessageInput) {
        textareaRef.value = parsedSavedMessageInput.message;
        inputRef.value = parsedSavedMessageInput.email;
    }
}

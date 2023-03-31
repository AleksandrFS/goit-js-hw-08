import throttle from 'lodash.throttle';

const STORAGE_INPUT_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const inputRef = document.querySelector('.feedback-form input');

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);

let allInputData = {};

function onInput(e) {
  allInputData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_INPUT_KEY, JSON.stringify(allInputData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(allInputData);
  localStorage.removeItem(STORAGE_INPUT_KEY);
  allInputData = {};
}

messageInputBeforeFault();
function messageInputBeforeFault() {
  const savedMessageInput = localStorage.getItem(STORAGE_INPUT_KEY);
  let parsedSavedMessageInput;

  if (savedMessageInput === null) {
    parsedSavedMessageInput = {};
  } else {
    parsedSavedMessageInput = JSON.parse(savedMessageInput);
    if (
      parsedSavedMessageInput['email'] &&
      parsedSavedMessageInput['message']
    ) {
      inputRef.value = parsedSavedMessageInput.email;
      textareaRef.value = parsedSavedMessageInput.message;
    } else if (parsedSavedMessageInput['email']) {
      inputRef.value = parsedSavedMessageInput.email;
    } else if (parsedSavedMessageInput['message']) {
      console.log(parsedSavedMessageInput['message']);
      textareaRef.value = parsedSavedMessageInput.message;
    }
  }
}

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  formEl: document.querySelector('.feedback-form'),
  textareaEl: document.querySelector('.feedback-form textarea'),
  inputEl: document.querySelector('.feedback-form input'),
};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.textareaEl.addEventListener('input', throttle(onTextarea, 500));
refs.formEl.addEventListener('input', onInput);

sendEmail();
sendMess();

function onFormSubmit(evt) {
  evt.preventDefault();
}

function onTextarea(evt) {
  // console.log(evt.target.value);
  // localStorage.setItem(STORAGE_KEY, evt.target.value);
}

function sendMess() {
  const message = localStorage.getItem(STORAGE_KEY);
  const parsedSettings = JSON.parse(message);

  if (parsedSettings) {
    refs.textareaEl.value = parsedSettings.message;
  }
}

function sendEmail() {
  const message = localStorage.getItem(STORAGE_KEY);
  const parsedSettings = JSON.parse(message);

  if (parsedSettings) {
    refs.inputEl.value = parsedSettings.email;
  }
}

function onInput(e) {
  // console.log(e.target.name);
  // console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

  // loadLocStor(formData);
}

// function loadLocStor() {
//   const parsedSettings = JSON.parse(savedSettings);
// }
// console.log('formData', formData);
// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);

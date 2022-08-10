import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
let formData = {
    email: '',
    message: ''
};




const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input')
}
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
// refs.form.addEventListener('input', e => {
//     console.log(e.target.name);
//     console.log(e.target.value);
// })
populateTextarea()


function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Отправляем форму');
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

}
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// function onTextareaInput(evt) {
//     const message = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, message)

// }

function populateTextarea() {
    const savedMsg = localStorage.getItem(STORAGE_KEY)

    const { email, message } = JSON.parse(savedMsg);
    formData = { email, message };
    refs.input.value = email;
    refs.textarea.value = message;
  
}
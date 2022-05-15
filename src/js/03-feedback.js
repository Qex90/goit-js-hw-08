import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const formData = {
    email: "",
    message: ""
}


const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
    input: document.querySelector(".feedback-form input")
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData)
}, 500))

populateForm();

function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
 }

function populateForm() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const data = JSON.parse(savedMessage)
    refs.textarea.value = data.message;
    refs.input.value = data.email;
}
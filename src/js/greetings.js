const nameForm = document.querySelector(".js-name-form");
const nameInput = nameForm.querySelector("input");
const greetings = document.querySelector(".js-greetings");

const toDo = document.querySelector(".todo");

const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function greetingUser(name) {
    nameForm.classList.remove(SHOWING);
    greetings.classList.add(SHOWING);
    toDo.classList.add(SHOWING);
    greetings.innerText = `Hello! ${name}`;
}

function handleSubmit(e) {
    e.preventDefault();
    const value = nameInput.value;
    greetingUser(value);
    saveName(value);
}

function askForName() {
    nameForm.classList.add(SHOWING);
    nameForm.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        greetingUser(currentUser);
    }
}

function init() {
    loadName();
}

init();
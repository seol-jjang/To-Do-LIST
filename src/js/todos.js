const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    completedList = document.querySelector(".js-completedList");

const TODOS_LS = "toDos";
const COMPLETE_LS = "completed";

let toDoTasks = []
let completeTasks = [];

function handleBack(e) {
    const li = e.target.parentNode;
    const task = completeTasks.find(task => {
        return task.id === li.id
    });
    handleDelete(e);
    addToDos(task);
    saveTask()
}

function handleComplete(e) {
    const li = e.target.parentNode;
    const task = toDoTasks.find(task => {
        return task.id === li.id
    });
    handleDelete(e);
    addCompleted(task);
    saveTask();
}

function handleDelete(e) {
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
    toDoTasks = toDoTasks.filter(task => {
        return task.id !== li.id
    });
    completeTasks = completeTasks.filter(task => {
        return task.id !== li.id
    });
    saveTask();
}

function addCompleted(task) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const backBtn = document.createElement("button");

    span.innerText = task.text;
    delBtn.innerText = "❌";
    backBtn.innerText = "⏪";
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(backBtn);
    li.id = task.id;
    completedList.appendChild(li);

    delBtn.addEventListener("click", handleDelete);
    backBtn.addEventListener("click", handleBack);

    completeTasks.push(task);
    saveTask();
}

function addToDos(task) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const completeBtn = document.createElement("button");

    span.innerText = task.text;
    delBtn.innerText = "❌";
    completeBtn.innerText = "✅";
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(completeBtn);
    li.id = task.id;
    toDoList.appendChild(li);

    delBtn.addEventListener("click", handleDelete);
    completeBtn.addEventListener("click", handleComplete);

    toDoTasks.push(task);
    saveTask();
}

function saveTask() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDoTasks));
    localStorage.setItem(COMPLETE_LS, JSON.stringify(completeTasks));
}

function createTaskObj(text) {
    return {
        id: String(Date.now()),
        text
    };
}

function handleFormSubmit(e) {
    e.preventDefault();
    const task = createTaskObj(toDoInput.value);
    addToDos(task);
    toDoInput.value = "";
}

function loadTask() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    const loadedCompleted = localStorage.getItem(COMPLETE_LS);
    if(loadedToDos || loadedCompleted) {
        const parseToDos = JSON.parse(loadedToDos);
        const parseCompleted = JSON.parse(loadedCompleted);
        parseToDos.forEach(task => {
            addToDos(task);
        });
        parseCompleted.forEach(task => {
            addCompleted(task);
        });
    }
}

function init() {
    toDoForm.addEventListener("submit", handleFormSubmit);
    loadTask();
}

init();
const toDoBtn = document.querySelector(".to-do-btn");
const completeBtn = document.querySelector(".complete-btn");
const toDoContainer = document.querySelector(".js-toDoList");
const completedContainer = document.querySelector(".js-completedList");

const VISIBLE = "visible";
const ACTIVE = "active";

function handleBtn(e) {
    const target = e.target;
    
    if(!target.classList.contains(ACTIVE)) {
        target.classList.add(ACTIVE);
    }
    if(target.classList.contains("to-do-btn")) {
        toDoContainer.classList.add(VISIBLE);
        completedContainer.classList.remove(VISIBLE);
        completeBtn.classList.remove(ACTIVE);
    } else {
        completedContainer.classList.add(VISIBLE);
        toDoContainer.classList.remove(VISIBLE);
        toDoBtn.classList.remove(ACTIVE);
    }
}

function init() {
    toDoBtn.addEventListener("click", handleBtn);
    completeBtn.addEventListener("click", handleBtn);
}
init();




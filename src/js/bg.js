const body = document.querySelector("body");
const imgContainer = document.querySelector(".bgImg");

const MAX_NUMBER = 5;

const colors = ["#000000", "#b9a2d3", "#3d7eaa", "#1d976c", "#cfd9df"];

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `src/img/${imgNumber + 1}.png`;
    image.classList.add("miniImage");
    imgContainer.append(image);
}

function paintBackground(colorNumber) {
    body.style.backgroundColor = colors[colorNumber];
}

function getNumber() {
    const number = Math.floor(Math.random() * MAX_NUMBER);
    return number;
}

function init() {
    const randomNumber = getNumber();
    paintBackground(randomNumber);
    paintImage(randomNumber);
}

init();
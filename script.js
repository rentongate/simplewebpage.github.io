let fontSize = 32

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} //Found this online

function changeColor() {
    let r = getRandomInt(0, 255)
    let g = getRandomInt(0, 255)
    let b = getRandomInt(0, 255)

    document.getElementById("header").style.color = "rgb(" + r + "," + g + "," + b + ")";
}

function increaseSize() {
    fontSize++
    document.getElementById("header").style.fontSize = fontSize + "px"
}

function decreaseSize() {
    fontSize--
    document.getElementById("header").style.fontSize = fontSize + "px"
}

document.getElementById("font-color").addEventListener("click", changeColor);

document.getElementById("font-increase").addEventListener("click", increaseSize);

document.getElementById("font-decrease").addEventListener("click", decreaseSize);


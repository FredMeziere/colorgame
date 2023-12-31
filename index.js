const square1 = document.getElementsByClassName("color1")[0];
const square2 = document.getElementsByClassName("color2")[0];
const square3 = document.getElementsByClassName("color3")[0];
const square4 = document.getElementsByClassName("color4")[0];
const square5 = document.getElementsByClassName("color5")[0];
const square6 = document.getElementsByClassName("color6")[0];
const rgbDiv = document.getElementsByClassName("header-rgb")[0];
const newGame = document.getElementsByClassName("p-start")[0];
const easy = document.getElementsByClassName("difficulty-easy")[0];
const difficult = document.getElementsByClassName("difficulty-hard")[0];


const red = getRandomNumber(0, 255);
const green = getRandomNumber(0, 255);
const blue = getRandomNumber(0, 255);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomNumber(0, 255);

let targetColor;

function updateRgb() {
    const newRed = getRandomNumber(0, 255);
    const newGreen = getRandomNumber(0, 255);
    const newBlue = getRandomNumber(0, 255);

    targetColor = "rgb(" + newRed + ", " + newGreen + ", " + newBlue + ")";
    rgbDiv.textContent = "RGB (" + newRed + ", " + newGreen + ", " + newBlue + ")";
    console.log(targetColor);
}

function newSquareColor() {
    square1.style.backgroundColor = "rgb(" + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ")";
    square2.style.backgroundColor = "rgb(" + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ")";
    square3.style.backgroundColor = "rgb(" + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ")";
    square4.style.backgroundColor = "rgb(" + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ")";
    square5.style.backgroundColor = "rgb(" + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ")";
    square6.style.backgroundColor = "rgb(" + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ", " + getRandomNumber(0, 255) + ")";


    const randomIndex = getRandomNumber(1, 6);
    const randomSquare = [square1, square2, square3, square4, square5, square6][randomIndex];
    randomSquare.style.backgroundColor = targetColor;


    randomSquare.addEventListener("click", function () {
        if (randomSquare.style.backgroundColor === targetColor) {
            alert("Vous avez gagné !");
            updateRgb();
            newSquareColor();
        }
    });
}

newGame.addEventListener("click", updateRgb);
newGame.addEventListener("click", newSquareColor);
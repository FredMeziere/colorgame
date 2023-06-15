const square1 = document.getElementsByClassName("color1");
const square2 = document.getElementsByClassName("color2");
const square3 = document.getElementsByClassName("color3");
const square4 = document.getElementsByClassName("color4");
const square5 = document.getElementsByClassName("color5");
const square6 = document.getElementsByClassName("color6");
const rgbDiv = document.getElementsByClassName("header-rgb");

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Utilisation de la fonction getRandomNumber pour générer un nombre entre 0 et 255
  const randomNumber = getRandomNumber(0, 255);


  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);

  const color = "rgb(" + red + ", " + green + ", " + blue + ")";
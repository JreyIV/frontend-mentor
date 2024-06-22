const slider = document.getElementById("myRange");

// inputs
const lengthVal = document.getElementById("length-value");
let checkedBoxes = document.querySelectorAll(".checkbox:checked");

// output
const generatedPassowrd = document.getElementById("generated-password");

// buttons
const generateBtn = document.getElementById("button-submit");

const updateSliderBackground = () => {
  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty("--slider-value", value + "%");
};

const updateLengthValue = (e) => {
  let lengthValue = e.target.value;
  lengthVal.innerHTML = lengthValue;
};

slider.addEventListener("input", (e) => {
  updateSliderBackground();
  updateLengthValue(e);
});

const getChecked = () => {
  let checkedObj = {};
  let checkedBoxes = document.querySelectorAll(".checkbox");
  checkedBoxes.forEach((box) => {
    box.checked ? (checkedObj[box.id] = true) : (checkedObj[box.id] = false);
  });
  return checkedObj;
};

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const checkedBoxes = getChecked();
  const passwordLength = slider.value;
  generateRandomPassword(checkedBoxes, passwordLength);
});

// generate random password
let characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "~`@#$%^&*()_+-=[]{}|;:,./<>?",
};
generateRandomPassword = (checkedBoxes, passwordLength) => {
  let password = "";
  let characterQueue = "";

  if (checkedBoxes["uppercase"] === true) {
    characterQueue += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (checkedBoxes["lowercase"] === true) {
    characterQueue += "abcdefghijklmnopqrstuvwxyz";
  }

  if (checkedBoxes["numbers"] === true) {
    characterQueue += "0123456789";
  }

  if (checkedBoxes["symbols"] === true) {
    characterQueue += "~`@#$%^&*()_+-=[]{}|;:,./<>?";
  }

  if (characterQueue.length === 0) {
    generatedPassowrd.style.color = "#f64a4a";
    generatedPassowrd.innerHTML = "invalid";
  } else {
    for (let i = 0; i < passwordLength; i++) {
      let randomKey = Math.floor(Math.random() * characterQueue.length);
      password += characterQueue[randomKey];
    }
    generatedPassowrd.style.color = "#e6e5ea";
    generatedPassowrd.innerHTML = password;
  }
};

updateSliderBackground();
lengthVal.innerHTML = slider.value;

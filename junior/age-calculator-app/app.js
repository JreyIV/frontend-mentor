const form = document.querySelector("form");
const happyBirthday = document.getElementById("birthday-div");

console.log(happyBirthday);

const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// outputs
const yearElement = document.getElementById("year-value");
const monthElement = document.getElementById("month-value");
const dayElement = document.getElementById("day-value");

// todays date
const todaysDate = new Date();
const todaysYear = todaysDate.getFullYear();
const todaysMonth = todaysDate.getMonth();
const todaysDay = todaysDate.getDate();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dayInput = document.querySelector("#day").value;
  const monthInput = document.querySelector("#month").value;
  const yearInput = document.querySelector("#year").value;

  validateInput(dayInput, monthInput, yearInput);
});

// error
function setError(element, message) {
  const parentElement = element.parentElement;
  const labelElement = parentElement.querySelector("label");
  const inputElement = parentElement.querySelector("input");

  labelElement.style.color = "red";
  inputElement.style.borderColor = "red";
  element.textContent = message;

  yearElement.textContent = "--";
  monthElement.textContent = "--";
  dayElement.textContent = "--";
}

// reset styles on success

function resetStyles(element) {
  const parentElement = element.parentElement;
  const labelElement = parentElement.querySelector("label");
  const inputElement = parentElement.querySelector("input");

  labelElement.style.color = "";
  inputElement.style.borderColor = "";
  element.textContent = "";
}

validateInput = (day, month, year) => {
  const dayError = document.getElementById("day-error");
  const monthError = document.getElementById("month-error");
  const yearError = document.getElementById("year-error");

  // Reset error messages
  dayError.textContent = "";
  monthError.textContent = "";
  yearError.textContent = "";

  let isValid = true;

  //   day validation
  if (day === "") {
    setError(dayError, "Day is required");
    isValid = false;
  } else if (Number(day) > daysPerMonth[month - 1] || Number(day) < 1) {
    setError(dayError, "Day is invalid");
    isValid = false;
  } else {
    resetStyles(dayError);
  }

  //   month validation
  if (month === "") {
    setError(monthError, "Month is required");
    isValid = false;
  } else if (Number(month) > 12 || Number(month) < 1) {
    setError(monthError, "Month is invalid");
    isValid = false;
  } else {
    resetStyles(monthError);
  }

  //   year validation
  if (year === "") {
    setError(yearError, "Year is required");
    isValid = false;
  } else if (Number(year) < 1) {
    setError(yearError, "Year is invalid");
    isValid = false;
  } else if (Number(year) > todaysYear) {
    setError(yearError, "Must be in the past");
    isValid = false;
  } else {
    resetStyles(yearError);
  }

  if (isValid) {
    // console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    calculateAge(day, month, year);
  }
};

function calculateAge(day, month, year) {
  const birthDate = new Date(year, month - 1, day);
  const yyyy = todaysYear - birthDate.getFullYear();
  const mm = todaysMonth - birthDate.getMonth();
  const dd = todaysDay - birthDate.getDate();

  //   happy birthday message
  if (dd === 0 && mm === 0) {
    happyBirthday.style.display = "block";
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.animationPlayState = "running";
    setTimeout(() => {
      happyBirthday.style.display = "none";
      progressBar.style.animationPlayState = "paused";
    }, 5000);
  } else {
    happyBirthday.style.display = "none";
  }
  yearElement.textContent = yyyy;
  monthElement.textContent = mm;
  dayElement.textContent = dd;
}

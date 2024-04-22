const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const mainNewsletter = document.getElementById("main-newsletter");
const successContainer = document.querySelector(".success-container");
const dismissButton = document.getElementById("dismiss-btn");
const emailSpan = document.getElementById("email-span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (input, message) => {
  const inputControl = input.parentElement;
  const errorDisplay = inputControl.querySelector("#error");
  const errorText = errorDisplay.querySelector("p");

  console.log(message);
  errorText.innerText = message;

  input.classList.add("error");
};

const isValidEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};
validateInputs = () => {
  emailInput.value = emailInput.value.trim();

  if (emailInput.value === "") {
    setError(emailInput, "Invalid email address");
  } else if (!isValidEmail(emailInput.value)) {
    setError(emailInput, "Invalid email address");
  } else {
    mainNewsletter.style.display = "none";
    successContainer.style.display = "flex";
    emailSpan.innerText = emailInput.value;

    // Reset the form
    emailInput.value = ""; // Clear the email input field
    emailInput.classList.remove("error"); // Remove the "error" class from the email input
    const errorDisplay = emailInput.parentElement.querySelector("#error");
    const errorText = errorDisplay.querySelector("p");
    errorText.innerText = ""; // Clear the error message
  }
};

// dismiss button
dismissButton.addEventListener("click", () => {
  successContainer.style.display = "none";
  mainNewsletter.style.display = "flex";
});

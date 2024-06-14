let darkMode = localStorage.getItem("darkMode");
//********** imports **********/

// buttons
const toggleButton = document.getElementById("button-toggle-theme");

// themes
const toggleIcon = document.querySelector(".theme-toggle-icons");
const toggleText = document.getElementById("theme-toggle-text");
console.log(toggleText);

//********** darkmode **********//

// chech if dark mode is enabled
// if it is enabled, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
  // 1. add the class darkmode to the body
  document.body.classList.add("darkmode");
  // 2. change toggle icon
  toggleIcon.src = "./assets/icon-sun.svg";
  // 3. change toggle text
  toggleText.textContent = "Light";
  // 4. update darkMode in the localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. remove the class darkmode to the body
  document.body.classList.remove("darkmode");
  // 2. change toggle icon
  toggleIcon.src = "./assets/icon-moon.svg";
  // 3. change toggle text
  toggleText.textContent = "Dark";
  // 4. update darkMode in the localStorage
  localStorage.setItem("darkMode", null);
};

// setdark theme on pageload
if (darkMode === "enabled") {
  enableDarkMode();
} else {
  disableDarkMode();
}

// toggle theme
toggleButton.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

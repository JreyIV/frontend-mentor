let darkMode = localStorage.getItem("darkMode");
//********** imports **********/
const userContainer = document.getElementById("user-container");
const noResult = document.getElementById("no-results");

// buttons
const toggleButton = document.getElementById("button-toggle-theme");

// themes
const toggleIcon = document.querySelector(".theme-toggle-icons");
const toggleText = document.getElementById("theme-toggle-text");

// form
const searchForm = document.getElementById("form");
const searchInput = document.querySelector('input[type="text"]');

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

// clicked (for mobile)
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("clicked");
});

//********** form **********//
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  username = searchInput.value;
  getUser(username);
});

const getUser = async (username) => {
  try {
    const response = await fetch("https://api.github.com/users/" + username);
    if (response.ok) {
      const data = await response.json();
      userContainer.setAttribute("style", "display: block");
      noResult.setAttribute("style", "display: none");
      updateInfo(data);
    } else {
      userContainer.setAttribute("style", "display: none");
      noResult.setAttribute("style", "display: block");
    }
  } catch (error) {
    userContainer.setAttribute("style", "display: none");
    console.log("An error occurred:", error);
  }
};

const updateInfo = (data) => {
  // 1. get info

  const avatar = data.avatar_url;
  const name = data.name;
  const username = data.login;
  const dateString = data.created_at;
  const bio = data.bio;
  const repos = data.public_repos;
  const followers = data.followers;
  const following = data.following;
  const location = data.location;
  const company = data.company;
  const blog = data.blog;
  const twitter = data.twitter_username;

  //   change date format
  const date = new Date(dateString);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  // 2. update info
  document.querySelector(".user-image").src = avatar;
  document.getElementById("username").textContent = name;
  document.getElementById("handle").textContent = "@" + username;
  document.getElementById("date").textContent = formattedDate;
  document.getElementById("bio").textContent = bio;
  document.getElementById("repos-value").textContent = repos;
  document.getElementById("followers-value").textContent = followers;
  document.getElementById("following-value").textContent = following;

  const locationValue = document.getElementById("location-value");
  const blogValue = document.getElementById("blog-value");
  const twitterValue = document.getElementById("twitter-value");
  const companyValue = document.getElementById("company-value");

  if (location === null || location === "") {
    locationValue.textContent = "Not Available";
    locationValue.classList.add("not-available");
  } else {
    locationValue.textContent = location;
    locationValue.classList.remove("not-available");
  }

  if (blog === null || blog === "") {
    blogValue.textContent = "Not Available";
    blogValue.classList.add("not-available");
  } else {
    blogValue.textContent = blog;
    blogValue.classList.remove("not-available");
  }

  if (twitter === null || twitter === "") {
    twitterValue.textContent = "Not Available";
    twitterValue.classList.add("not-available");
  } else {
    twitterValue.textContent = twitter;
    twitterValue.classList.remove("not-available");
  }

  if (company === null || company === "") {
    companyValue.textContent = "Not Available";
    companyValue.classList.add("not-available");
  } else {
    companyValue.textContent = company;
    companyValue.classList.remove("not-available");
  }
};

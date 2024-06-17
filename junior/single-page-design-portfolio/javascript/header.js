document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (header) {
    header.innerHTML = `
        <a href="https://jreyiv.github.io/frontend-mentor/" class="button-home">
            Homepage
        </a>
        <!-- nav -->
        <nav>
                <img src="../assets/logo.svg" alt="logo" />
                <button class="button black-button">Free Consultation</button>
        </nav>`;
  }
});

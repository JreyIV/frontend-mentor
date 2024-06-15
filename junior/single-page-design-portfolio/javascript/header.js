document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (header) {
    header.innerHTML = `
        <a href="https://jreyiv.github.io/frontend-mentor/" class="button-home">
            <div>Homepage</div>
        </a>
        <!-- nav -->
        <nav>
            <div>
                <img src="../assets/logo.svg" alt="logo" />
            </div>
            <div>
                <button class="button black-button">Free Consultation</button>
            </div>
        </nav>`;
  }
});

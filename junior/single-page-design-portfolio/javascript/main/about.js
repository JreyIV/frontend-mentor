document.addEventListener("DOMContentLoaded", function () {
  const about = document.querySelector("#about");
  if (about) {
    about.innerHTML = `
<div class="about-image">
    <img src="../../assets/image-amy.webp" alt="profile picture" />
</div>
<div class="about-text">
    <h2>I’m Amy, and I’d love to work on your next project</h2>
    <p>
        I love working with others to create beautiful design solutions.
        I’ve designed everything from brand illustrations to complete mobile
        apps. I’m also handy with a camera!
    </p>
    <div>
        <button class="button orange-button">Free Consultation</button>
    </div>
</div>
`;
  }
});

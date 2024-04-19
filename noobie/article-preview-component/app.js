const shareOpen = document.getElementById("share-open");
const shareClose = document.getElementById("share-close");
const shareComponent = document.querySelector(".share-component");
const shareButton = document.querySelector(".share-button");

shareOpen.addEventListener("click", () => {
  shareComponent.classList.toggle("show");
  shareButton.classList.toggle("active");
});

shareClose.addEventListener("click", () => {
  shareComponent.classList.toggle("show");
  shareButton.classList.toggle("active");
});

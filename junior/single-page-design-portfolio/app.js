const arrowButtons = document.querySelectorAll(".arrow-button");

const workScroller = document.querySelector(".work-scroller");
const workImages = workScroller.querySelectorAll("img");
const cardWidth = workImages[0].offsetWidth;

// render middle image
window.addEventListener("load", centerMiddleImage);

function centerMiddleImage() {
  const middleImage = workImages[2];
  const scrollPosition =
    middleImage.offsetLeft -
    workScroller.offsetWidth / 2 +
    middleImage.offsetWidth / 2;
  workScroller.scrollTo({
    left: scrollPosition,
    behavior: "auto",
  });
}

// arrow button click event listener
arrowButtons.forEach((arrowButton) => {
  arrowButton.addEventListener("click", () => {
    arrowButton.id === "left-arrow"
      ? handleLeftArrowClick()
      : handleRightArrowClick();
  });
});

// left arrow click
function handleLeftArrowClick() {
  workScroller.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });
}

// right arrow click
function handleRightArrowClick() {
  workScroller.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });
}

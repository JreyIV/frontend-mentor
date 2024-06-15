document.addEventListener("DOMContentLoaded", function () {
  const work = document.querySelector("#work");
  if (work) {
    work.innerHTML = `
<div class="work-title">
    <h2>My Work</h2>
</div>
<div class="work-scroller">
    <img src="../../assets/image-slide-1.jpg" />
    <img src="../../assets/image-slide-2.jpg" />
    <img src="../../assets/image-slide-3.jpg" />
    <img src="../../assets/image-slide-4.jpg" />
    <img src="../../assets/image-slide-5.jpg" />
</div>
<div class="arrow-buttons">
    <button class="arrow-button" id="left-arrow">
        <img src="../../assets/icon-arrow-left.svg" alt="left-arrow" />
    </button>
    <button class="arrow-button" id="right-arrow">
        <img src="../../assets/icon-arrow-right.svg" alt="right-arrow" />
    </button>
</div>`;
  }

  const arrowButtons = document.querySelectorAll(".arrow-button");

  const workScroller = document.querySelector(".work-scroller");
  const workImages = workScroller.querySelectorAll("img");
  const cardWidth = workImages[0].offsetWidth;
  const scrollerChildren = [...workScroller.children];

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

  let cardPerView = Math.round(workScroller.offsetWidth / cardWidth);

  //insert copies of the last few cards to beginning of scroller for infinite scrolling
  scrollerChildren
    .slice(-cardPerView)
    .reverse()
    .forEach((card) => {
      workScroller.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

  //   insert copies of the first few cards to end of scroller for infinite scrolling
  scrollerChildren.slice(0, cardPerView).forEach((card) => {
    workScroller.insertAdjacentHTML("beforeend", card.outerHTML);
  });

  // infinite scroll

  const infiniteScroll = () => {
    if (workScroller.scrollLeft === 0) {
      workScroller.classList.add("no-transition");
      workScroller.scrollLeft =
        workScroller.scrollWidth - 2 * workScroller.offsetWidth;
      requestAnimationFrame(() => {
        workScroller.classList.remove("no-transition");
      });
    } else if (
      Math.ceil(workScroller.scrollLeft) ===
      workScroller.scrollWidth - workScroller.offsetWidth
    ) {
      workScroller.classList.add("no-transition");
      workScroller.scrollLeft = cardWidth * cardPerView;
      requestAnimationFrame(() => {
        workScroller.classList.remove("no-transition");
      });
    }

    requestAnimationFrame(infiniteScroll);
  };

  workScroller.addEventListener("scroll", infiniteScroll);

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
});

const slider = document.getElementById("myRange");
const lengthVal = document.getElementById("length-value");

const updateSliderBackground = () => {
  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty("--slider-value", value + "%");
};

const updateLengthValue = (e) => {
  lengthVal.innerHTML = e.target.value;
};

slider.addEventListener("input", (e) => {
  updateSliderBackground();
  updateLengthValue(e);
});

updateSliderBackground();
lengthVal.innerHTML = slider.value;

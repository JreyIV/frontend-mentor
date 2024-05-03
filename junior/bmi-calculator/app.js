// inputs

const radioButtons = document.querySelectorAll('input[name="radio"]');
const metricHeightInput = document.getElementById("metric-height");
const metricWeightInput = document.getElementById("metric-weight");

console.log(metricHeightInput);
console.log(metricWeightInput);

// outputs

const metricContent = document.getElementById("metric-container");
const imperialContent = document.getElementById("imperial-container");

const resultContent = document.getElementById("results");

//******** switch between metric and imperial **********//

// default metric
metricContent.classList.remove("hidden");
imperialContent.classList.add("hidden");

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", handleChange);
});

function handleChange(e) {
  const selectedRadio = e.target.value;

  if (selectedRadio === "metric") {
    metricContent.classList.remove("hidden");
    imperialContent.classList.add("hidden");
  } else {
    imperialContent.classList.remove("hidden");
    metricContent.classList.add("hidden");
  }
}

//******** Metric **********//

metricHeightInput.addEventListener("input", (e) => {
  const height = e.target.value;

  console.log(height);
});

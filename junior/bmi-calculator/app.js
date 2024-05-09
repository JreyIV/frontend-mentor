// inputs

const radioButtons = document.querySelectorAll('input[name="radio"]');
const metricDiv = document.getElementById("metric-container");
const metricHeightInput = document.getElementById("metric-height");
const metricWeightInput = document.getElementById("metric-weight");

// console.log(metricHeightInput);
// console.log(metricWeightInput);
console.log(metricDiv);

// outputs

const metricContent = document.getElementById("metric-container");
const imperialContent = document.getElementById("imperial-container");

const resultContent = document.getElementById("results");
const resultsBold = document.getElementById("results-bold");
const bmiValue = document.getElementById("BMI-value");
const resultsText = document.getElementById("results-text");

// console.log(resultsSpan);

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

//******** Input Validation **********//
function validateInputsMetric(mheight, mweight) {
  const weightClass = bmiWeightClass(mheight, mweight);
  console.log(weightClass);

  if (mheight > 0 && mweight > 0) {
    resultsBold.style.fontSize = "1rem";
    resultContent.style.textAlign = "start";
    resultsBold.textContent = "Your BMI is...";
    bmiValue.textContent = bmiMetric(mheight, mweight);
    resultsText.textContent = `Your BMI suggests that you're ${weightClass.weightClass}. Your ideal weight is between ${weightClass.idealWeight}.`;
    // resultContent.textContent = "Your BMI is " + bmiMetric(mheight, mweight);
  } else {
    console.log("invalid input");
  }
}

// ******** BMI Calculations **********//
function bmiMetric(height, weight) {
  const bmi = weight / (height / 100) ** 2;
  return bmi.toFixed(1);
}

// ********* BMI weightclass ********** //
function bmiWeightClass(height, weight) {
  const bmi = bmiMetric(height, weight);
  const idealWeightLower = 18.5 * (height / 100) ** 2;
  const idealWeightUpper = 24.9 * (height / 100) ** 2;

  if (bmi < 18.5) {
    return {
      weightClass: "underweight",
      idealWeight: `${idealWeightLower.toFixed(
        1
      )}kgs and ${idealWeightUpper.toFixed(1)}kgs`,
    };
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return {
      weightClass: "a healthy weight",
      idealWeight: `${idealWeightLower.toFixed(
        1
      )}kgs and ${idealWeightUpper.toFixed(1)}kgs`,
    };
  } else if (bmi >= 25 && bmi <= 29.9) {
    return {
      weightClass: "overweight",
      idealWeight: `${idealWeightLower.toFixed(
        1
      )}kgs and ${idealWeightUpper.toFixed(1)}kgs`,
    };
  } else {
    return {
      weightClass: "obese",
      idealWeight: `${idealWeightLower.toFixed(
        1
      )}kgs and ${idealWeightUpper.toFixed(1)}kgs`,
    };
  }
}

//******** Metric **********//
// const metricInputs = metricDiv.querySelectorAll("input");
// console.log(metricInputs);

metricHeightInput.addEventListener("input", (e) => {
  const mheight = e.target.value;
  const mweight = metricWeightInput.value;
  validateInputsMetric(mheight, mweight);
  bmiWeightClass(mheight, mweight);
});

metricWeightInput.addEventListener("input", (e) => {
  const mweight = e.target.value;
  const mheight = metricHeightInput.value;

  validateInputsMetric(mheight, mweight);
  bmiWeightClass(mheight, mweight);
});

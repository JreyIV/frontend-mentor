//********* inputs **********//

// radio
const radioButtons = document.querySelectorAll('input[name="radio"]');

// metric
const metricDiv = document.getElementById("metric-container");
const metricHeightInput = document.getElementById("metric-height");
const metricWeightInput = document.getElementById("metric-weight");

// console.log(metricDiv);

// imperial
const imperialDiv = document.getElementById("imperial-container");
const imperialFoot = document.getElementById("imperial-height-ft");
const imperialInch = document.getElementById("imperial-height-in");
const imperialStone = document.getElementById("imperial-weight-st");
const imperialPound = document.getElementById("imperial-weight-lbs");

//********* outputs **********//
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
function validateInputsMetric(mheight, mweight, isMetric) {
  const weightClass = metricWeightClass(mheight, mweight);

  if (mheight > 0 && mweight > 0) {
    resultsBold.style.fontSize = "1rem";
    resultContent.style.textAlign = "start";
    resultsBold.textContent = "Your BMI is...";
    bmiValue.textContent = bmiMetric(mheight, mweight);
    resultsText.textContent = `Your BMI suggests that you're ${
      weightClass.weightClass
    }. Your ideal weight is between ${
      isMetric ? weightClass.idealWeightMetric : weightClass.idealWeightImperial
    }.`;
    // resultContent.textContent = "Your BMI is " + bmiMetric(mheight, mweight);
  } else {
    console.log("invalid input");
  }
}

// imperial to metric
function imperialToMetric(iFoot, iInch, iStone, iPound) {
  if (iFoot && iInch && iStone && iPound) {
    const iHeight = iFoot * 30.48 + iInch * 2.54;
    const iWeight = iStone * 6.35029 + iPound * 0.453592;
    validateInputsMetric(iHeight, iWeight, false);
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
function metricWeightClass(height, weight) {
  const bmi = bmiMetric(height, weight);
  const idealWeightLowerMetric = 18.5 * (height / 100) ** 2;
  const idealWeightUpperMetric = 24.9 * (height / 100) ** 2;

  // Convert metric to imperial
  const idealWeightLowerPounds = 18.5 * (height / 100) ** 2 * 2.20462;
  const idealWeightUpperPounds = 24.9 * (height / 100) ** 2 * 2.20462;

  const idealWeightLowerStones = Math.floor(idealWeightLowerPounds / 14);
  const idealWeightLowerPoundsRemainder = Math.floor(
    idealWeightLowerPounds % 14
  );

  const idealWeightUpperStones = Math.floor(idealWeightUpperPounds / 14);
  const idealWeightUpperPoundsRemainder = Math.floor(
    idealWeightUpperPounds % 14
  );

  if (bmi < 18.5) {
    return {
      weightClass: "underweight",
      idealWeightMetric: `${idealWeightLowerMetric.toFixed(
        1
      )}kgs and ${idealWeightUpperMetric.toFixed(1)}kgs`,
      idealWeightImperial: `${idealWeightLowerStones}st ${idealWeightLowerPoundsRemainder}lbs - ${idealWeightUpperStones}st ${idealWeightUpperPoundsRemainder}lbs`,
    };
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return {
      weightClass: "a healthy weight",
      idealWeightMetric: `${idealWeightLowerMetric.toFixed(
        1
      )}kgs - ${idealWeightUpperMetric.toFixed(1)}kgs`,
      idealWeightImperial: `${idealWeightLowerStones}st ${idealWeightLowerPoundsRemainder}lbs - ${idealWeightUpperStones}st ${idealWeightUpperPoundsRemainder}lbs`,
    };
  } else if (bmi >= 25 && bmi <= 29.9) {
    return {
      weightClass: "overweight",
      idealWeightMetric: `${idealWeightLowerMetric.toFixed(
        1
      )}kgs - ${idealWeightUpperMetric.toFixed(1)}kgs`,
      idealWeightImperial: `${idealWeightLowerStones}st ${idealWeightLowerPoundsRemainder}lbs - ${idealWeightUpperStones}st ${idealWeightUpperPoundsRemainder}lbs`,
    };
  } else {
    return {
      weightClass: "obese",
      idealWeightMetric: `${idealWeightLowerMetric.toFixed(
        1
      )}kgs - ${idealWeightUpperMetric.toFixed(1)}kgs`,
      idealWeightImperial: `${idealWeightLowerStones}st ${idealWeightLowerPoundsRemainder}lbs - ${idealWeightUpperStones}st ${idealWeightUpperPoundsRemainder}lbs`,
    };
  }
}

//******** Metric **********//
// const metricInputs = metricDiv.querySelectorAll("input");
// console.log(metricInputs);

metricHeightInput.addEventListener("input", (e) => {
  const mheight = e.target.value;
  const mweight = metricWeightInput.value;
  validateInputsMetric(mheight, mweight, true);
  metricWeightClass(mheight, mweight);
});

metricWeightInput.addEventListener("input", (e) => {
  const mweight = e.target.value;
  const mheight = metricHeightInput.value;

  validateInputsMetric(mheight, mweight, true);
  metricWeightClass(mheight, mweight);
});

//********* Imperial **********//
imperialFoot.addEventListener("input", (e) => {
  const iFoot = e.target.value;
  const iInch = imperialInch.value;
  const iStone = imperialStone.value;
  const iPound = imperialPound.value;
  imperialToMetric(iFoot, iInch, iStone, iPound);
});

imperialInch.addEventListener("input", (e) => {
  const iInch = e.target.value;
  const iFoot = imperialFoot.value;
  const iStone = imperialStone.value;
  const iPound = imperialPound.value;
  imperialToMetric(iFoot, iInch, iStone, iPound);
});

imperialStone.addEventListener("input", (e) => {
  const iStone = e.target.value;
  const iFoot = imperialFoot.value;
  const iInch = imperialInch.value;
  const iPound = imperialPound.value;
  imperialToMetric(iFoot, iInch, iStone, iPound);
});

imperialPound.addEventListener("input", (e) => {
  const iPound = e.target.value;
  const iFoot = imperialFoot.value;
  const iInch = imperialInch.value;
  const iStone = imperialStone.value;
  imperialToMetric(iFoot, iInch, iStone, iPound);
});

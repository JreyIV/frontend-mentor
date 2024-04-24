const billInput = document.getElementById("bill");
const radioBtns = document.querySelectorAll(
  'input[name="tip-select"]:not(#custom)'
);
const customTipInput = document.getElementById("custom");
const peopleInput = document.getElementById("people");
const tipElement = document.getElementById("tip-total");
const totalElement = document.getElementById("total-amount");
const resetBtn = document.getElementById("reset-btn");

// tip value helper function
function getTipValue() {
  const selectedRadioBtn = document.querySelector(
    'input[name="tip-select"]:checked'
  );
  if (!selectedRadioBtn && !customTipInput.value) {
    return 0;
  } else if (selectedRadioBtn) {
    return parseFloat(selectedRadioBtn.value);
  } else {
    return parseFloat(customTipInput.value) / 100;
  }
}

// get bill value
billInput.addEventListener("input", handleBillValue);

function handleBillValue(e) {
  const billValue = parseFloat(e.target.value);
  const tipValue = getTipValue();
  const peopleValue = parseFloat(peopleInput.value) || 1;

  calculateTotal(billValue, tipValue, peopleValue);
  calculateTip(billValue, tipValue, peopleValue);
}

// get tip value
radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", handleTipValue);
});

function handleTipValue(e) {
  const tipValue = parseFloat(e.target.value);
  const billValue = parseFloat(billInput.value);
  const peopleValue = parseFloat(peopleInput.value);
  //   console.log(tipValue);
  calculateTotal(billValue, tipValue, peopleValue);
  calculateTip(billValue, tipValue, peopleValue);
}

// handle custom tip input

customTipInput.addEventListener("input", handleCustomTipInput);

function handleCustomTipInput(e) {
  radioBtns.forEach((radioBtn) => (radioBtn.checked = false));
  const tipValue = parseFloat(e.target.value) / 100;
  const billValue = parseFloat(billInput.value);
  const peopleValue = peopleInput.value;
  //   console.log(`custom tip: ${tipValue}`);
  calculateTotal(billValue, tipValue, peopleValue);
  calculateTip(billValue, tipValue, peopleValue);
}

// handle people input

peopleInput.addEventListener("input", handlePeopleInput);

function handlePeopleInput(e) {
  const peopleValue = parseFloat(e.target.value);
  const tipValue = getTipValue();
  const billValue = parseFloat(billInput.value);
  //   console.log(peopleValue, tipValue, billValue);
  calculateTotal(billValue, tipValue, peopleValue);
  calculateTip(billValue, tipValue, peopleValue);
}

// calculate tip
function calculateTip(billValue, tipValue = 0, peopleValue = 1) {
  //   console.log("calculate tip:");
  //   console.log((billValue * tipValue) / peopleValue);
  // Fallback values
  billValue = billValue || 0;
  tipValue = tipValue || 0;
  peopleValue = parseFloat(peopleValue) || 1;
  console.log(billValue, tipValue, peopleValue);
  if (billValue > 0 && peopleValue > 0 && tipValue === 0) {
    tipElement.innerHTML = "Don't be lame<br> leave a tip";
    tipElement.style.fontSize = ".75rem"; // Set a smaller font size
  } else {
    tipElement.textContent = `$${((billValue * tipValue) / peopleValue).toFixed(
      2
    )}`;
    tipElement.style.fontSize = "";
  }
}

// calculate total
function calculateTotal(billValue, tipValue = 0, peopleValue = 1) {
  if (billValue && !isNaN(billValue)) {
    const totalAmount = (billValue + billValue * tipValue) / (peopleValue || 1);
    totalElement.textContent = `$${totalAmount.toFixed(2)}`;
  } else {
    totalElement.textContent = "$0.00";
  }
}

// reset button
resetBtn.addEventListener("click", resetInputs);

function resetInputs() {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
  radioBtns.forEach((radioBtn) => (radioBtn.checked = false));
  totalElement.textContent = "$0.00";
  tipElement.textContent = "$0.00";
}

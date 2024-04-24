const billInput = document.getElementById("bill");
const radioBtns = document.querySelectorAll(
  'input[name="tip-select"]:not(#custom)'
);
const customTipInput = document.getElementById("custom");
const peopleInput = document.getElementById("people");
const tipElement = document.getElementById("tip-total");
const totalElement = document.getElementById("total-amount");

// get bill value
billInput.addEventListener("input", handleBillValue);

function handleBillValue(e) {
  const billValue = parseFloat(e.target.value);

  console.log(billValue);
  calculateTotal(billValue);
}

// get tip value
radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", handleTipValue);
});

function handleTipValue(e) {
  const tipValue = e.target.value;
  const billValue = parseFloat(billInput.value);
  const peopleValue = peopleInput.value;
  console.log(tipValue);
  calculateTotal(billValue, tipValue, peopleValue);
}

// handle custom tip input

customTipInput.addEventListener("input", handleCustomTipInput);

function handleCustomTipInput(e) {
  radioBtns.forEach((radioBtn) => (radioBtn.checked = false));
  const tipValue = parseFloat(e.target.value) / 100;
  const billValue = parseFloat(billInput.value);
  const peopleValue = peopleInput.value;
  console.log(`custom tip: ${tipValue}`);
  calculateTotal(billValue, tipValue, peopleValue);
}

// handle people input

peopleInput.addEventListener("input", handlePeopleInput);

function handlePeopleInput(e) {
  const peopleValue = e.target.value;
  let tipValue;

  // Check if any radio button is selected
  const selectedRadioBtn = document.querySelector(
    'input[name="tip-select"]:checked'
  );
  if (selectedRadioBtn) {
    // If a radio button is selected, use its value as the tip value
    tipValue = selectedRadioBtn.value;
  } else {
    // If no radio button is selected, use the custom input value as the tip value
    tipValue = parseFloat(customTipInput.value) / 100; // Convert to decimal
  }
  const billValue = parseFloat(billInput.value);
  console.log(peopleValue, tipValue, billValue);
  calculateTotal(billValue, tipValue, peopleValue);
}

// calculate tip

// calculate total
function calculateTotal(billValue, tipValue = 0, peopleValue = 1) {
  if (billValue && !isNaN(billValue)) {
    const totalAmount = (billValue + billValue * tipValue) / (peopleValue || 1);
    totalElement.textContent = `$${totalAmount.toFixed(2)}`;
  } else {
    totalElement.textContent = "$0.00";
  }
}

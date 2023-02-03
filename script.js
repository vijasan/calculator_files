"use script";
// Get the elements from the HTML
const firstNumberInput = document.getElementById("firstnumber");
const secondNumberInput = document.getElementById("secondnumber");
const operatorSelect = document.getElementById("operator");
const calculateButton = document.getElementById("calculate");
const resultsList = document.getElementById("results");
const clearButton = document.getElementById("clear");
const roundingCheckbox = document.getElementById("doround");
const decimalSelect = document.getElementById("decimals");

// The calculation function
function calculate() {
  // Get the values from the input fields
  const firstNumber = parseFloat(firstNumberInput.value);
  const secondNumber = parseFloat(secondNumberInput.value);
  const operator = operatorSelect.value;

  // Do the calculation
  let result;
  switch (operator) {
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "sub":
      result = firstNumber - secondNumber;
      break;
    case "mul":
      result = firstNumber * secondNumber;
      break;
    case "div":
      result = firstNumber / secondNumber;
      break;
  }

  // Check if rounding is enabled
  if (roundingCheckbox.checked) {
    const decimalPlaces = decimalSelect.value;
    result = result.toFixed(decimalPlaces);
  }

  // Add the result to the list of results
  const resultItem = document.createElement("li");
  resultItem.innerText = result;
  resultsList.appendChild(resultItem);
  resultsList.scrollTop = resultsList.scrollHeight;
  firstNumberInput.value = result;
}

// The clear function
function clearResults() {
  resultsList.innerHTML = "";
}

// Add event listeners to the buttons
calculateButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clearResults);

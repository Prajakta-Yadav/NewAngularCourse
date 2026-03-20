// main.js
import { add, subtract, multiply, divide } from "./math.js";

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const calculateBtn = document.getElementById("calculate");
const resultText = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultText.textContent = "Please enter valid numbers";
    return;
  }

  let result;

  switch (operationSelect.value) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operation";
  }

  resultText.textContent = `Result: ${result}`;
});
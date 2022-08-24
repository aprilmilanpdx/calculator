// business logic

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1,num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// user interface logic 
function handleCalculation(event) {
  event.preventDefault();

const num1 = parseInt(document.querySelector("input#input1").value);
const num2 = parseInt(document.querySelector("input#input2").value);
const operator = document.querySelector("input[name='operator']:checked").value;

let result;
if (operator === "add") {
  result = add(num1, num2);
} else if (operator === "subtract") {
  result = subtract(num1, num2);
} else if (operator === "multiply") {
  result = multiply(num1, num2);
} else if (operator === "divide") {
  result = divide(num1, num2);
}

document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleCalculation);
});

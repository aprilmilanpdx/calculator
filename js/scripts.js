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
// ADD  CODE TO GET AND PROCESS FORM VALUES
}
const num1 = parseInt(document.querySelector("input#input1").value);
const num2 = parseInt(document.querySelector("input#input2").value);
const operator = document.querySelector("input[name='operator']:checked").value;
console.log("Number 1: " + num1);
console.log("Number 2: " + num2);
console.log("Operator:", operator);

// window.alert("The result of your numbers is " + add(num1, num2) + ". " + "The remainder of your numbers is " + subtract(num1, num2) + ". " + "The multiplication of your numbers is " + multiply(num1, num2) + ". " + "The division of your numbers is " + divide(num1, num2) + ".");

window.addEventListener("load", function() {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleCalculation);
});

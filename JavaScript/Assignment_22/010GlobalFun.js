function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function showMessage(message) {
  console.log(message);
}

console.log(add(34, 56));
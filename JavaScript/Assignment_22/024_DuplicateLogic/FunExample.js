//before

function calculateItem1() {
  const total = 100 + 100 * 0.1;
  console.log(total);
}

function calculateItem2() {
  const total = 200 + 200 * 0.1;
  console.log(total);
}

calculateItem1();
calculateItem2();

//After

function calculateTotal(price, tax) {
  return price + price * tax;
}

console.log(calculateTotal(100, 0.1));
console.log(calculateTotal(200, 0.1));
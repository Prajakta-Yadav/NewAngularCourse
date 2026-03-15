function calculate(a, b, op) {
try {
switch (op) {
case "+":
return a + b;
case "-":
return a - b;
default:
throw new Error("Invalid operator");
}
} catch (error) {
console.log(error.message);
}
}
calculate(5, 3, "*");
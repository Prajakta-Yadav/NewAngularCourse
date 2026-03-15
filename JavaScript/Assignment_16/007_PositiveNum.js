function checkNumber(num) {
if (num < 0) {
throw new Error("Number must be positive");
}
console.log("Valid number:", num);
}
try {
checkNumber(-5);
} catch (error) {
console.log(error.message);
}
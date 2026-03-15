function checkAge(age) {
if (age < 18) {
throw new Error("Age must be 18 or above");
}
console.log("Age valid");
}
try {
checkAge(15);
} catch (error) {
console.log(error.message);
}
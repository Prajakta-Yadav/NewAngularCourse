async function checkAge(age) {
if (age < 18) {
throw new Error("Age must be 18+");
}
return "Access granted";
}
checkAge(15).catch((err) => console.log(err.message));
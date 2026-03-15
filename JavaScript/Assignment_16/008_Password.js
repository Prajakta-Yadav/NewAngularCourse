function validatePassword(pass) {
if (pass.length < 8) {
throw new Error("Password must be at least 8 characters");
}
console.log("Password valid");
}
try {
validatePassword("123");
} catch (error) {
console.log(error.message);
}
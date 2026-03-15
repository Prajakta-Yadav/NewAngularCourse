function validateForm(name, email) {
try {
if (!name || !email) {
throw new Error("All fields required");
}
console.log("Form submitted");
} catch (error) {
console.log(error.message);
}
}
validateForm("", "test@gmail.com");
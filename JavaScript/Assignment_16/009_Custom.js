class CustomError extends Error {
constructor(message) {
super(message);
this.name = "CustomError";
}
}
try {
throw new CustomError("This is custom error");
} catch (error) {
console.log(error.name, error.message);
}
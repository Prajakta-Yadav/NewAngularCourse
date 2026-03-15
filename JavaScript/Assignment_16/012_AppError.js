class AppError extends Error {
constructor(code, message) {
super(message);
this.code = code;
}
}
try {
throw new AppError(404, "Resource not found");
} catch (error) {
console.log(error.code, error.message);
}
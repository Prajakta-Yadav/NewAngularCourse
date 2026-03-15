function logError(error) {
console.log("Time:", new Date());
console.log("Error:", error.message);
}
try {
throw new Error("System failure");
} catch (error) {
logError(error);
}
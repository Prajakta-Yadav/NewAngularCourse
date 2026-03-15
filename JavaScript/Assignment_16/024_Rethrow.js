try {
try {
throw new Error("Original error");
} catch (error) {
console.log("Handled locally");
throw error;
}
} catch (error) {
console.log("Handled again:", error.message);
}
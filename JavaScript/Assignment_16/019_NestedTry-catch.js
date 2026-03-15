try {
try {
throw new Error("Inner error");
} catch (error) {
console.log("Inner catch:", error.message);
throw error;
}
} catch (error) {
console.log("Outer catch:", error.message);
}
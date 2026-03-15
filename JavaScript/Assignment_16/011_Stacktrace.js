try {
throw new Error("Stack example");
} catch (error) {
console.log(error.stack);
}
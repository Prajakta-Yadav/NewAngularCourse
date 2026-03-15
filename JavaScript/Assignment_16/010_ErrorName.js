try {
throw new Error("Something went wrong");
} catch (error) {
console.log("Name:", error.name);
console.log("Message:", error.message);
}
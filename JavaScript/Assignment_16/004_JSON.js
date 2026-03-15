try {
let data = JSON.parse("{name: 'John'}"); // invalid JSON
} catch (error) {
console.log("Invalid JSON:", error.message);
}
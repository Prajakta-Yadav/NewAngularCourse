// 1. Strict Mode: This would cause an ERROR because 'y' is not declared
// y = "I will crash the script"; 
const y = "I am Private";

// 2. Module Scope: This is NOT added to the window object
const moduleVar = "I am hidden!";

console.log("\n--- Module Script ---");
console.log("Value of y:", y);
console.log("Is moduleVar on window?", window.moduleVar !== undefined); // false
console.log("Value of 'this':", this); // undefined
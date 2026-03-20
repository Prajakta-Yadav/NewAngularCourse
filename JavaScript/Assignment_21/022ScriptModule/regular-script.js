// 1. No Strict Mode: This doesn't crash even though 'x' isn't declared
x = "I am Global"; 

// 2. Polluting the window object
var globalVar = "Everyone can see me!";

console.log("--- Regular Script ---");
console.log("Value of x:", x);
console.log("Is globalVar on window?", window.globalVar !== undefined);
console.log("Value of 'this':", this); // Points to Window
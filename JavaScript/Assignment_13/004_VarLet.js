for (var i = 0; i < 3; i++) {
console.log("var loop:", i); //0 1 2 
}
console.log("Outside var loop:", i); //3

for (let j = 0; j < 3; j++) {
console.log("let loop:", j); //0 1 2  
}

console.log("Outside let loop:", j); // Error
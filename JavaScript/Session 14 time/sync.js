//Asynchronous

console.log("A");
console.log("B");
setTimeout(() => {
    console.log("D");
    console.log("E");
    console.log("F");
}, 100);

console.log("G");
console.log("H");
console.log("I");



//Synchronous 

console.log("A");
console.log("B");
console.log("c");
console.log("D");
console.log("E");
console.log("F");
console.log("G");
console.log("H");
console.log("I");
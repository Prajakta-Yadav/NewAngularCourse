setTimeout(() => {
console.log("Timeout executed");
}, 1000);
for (let i = 0; i < 1000000000; i++) {}
console.log("Loop finished");


//Timeout waits until loop completes
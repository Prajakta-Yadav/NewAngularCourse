function greet(name, callback) {
console.log("Hello " + name);
callback();
}
function done() {
console.log("Greeting complete");
}
greet("Prajakta", done);
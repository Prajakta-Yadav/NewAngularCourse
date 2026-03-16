console.log("Start");
setTimeout(() => {
console.log("Timeout");
}, 0);
function test() {
console.log("Function running");
}
test();
console.log("End");
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
async function test() {
console.log("Async function");
}
test();
console.log("End");
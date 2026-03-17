async function test() {
try {
let promise = Promise.reject("Error occurred");
let result = await promise;
console.log(result);
} catch (error) {
console.log("Caught:", error);
}
}
test();
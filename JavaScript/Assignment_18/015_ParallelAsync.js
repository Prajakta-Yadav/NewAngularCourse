async function runParallel() {
let results = await Promise.all([
Promise.resolve("Task 1"),
Promise.resolve("Task 2"),
]);
console.log(results);
}
runParallel();
function task1(callback) {
console.log("Task 1 done");
callback();
}
function task2(callback) {
console.log("Task 2 done");
callback();
}
function task3() {
console.log("Task 3 done");
}
task1(() => {
task2(() => {
task3();
});
});
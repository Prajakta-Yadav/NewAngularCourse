function task1(cb) {
console.log("Task 1");
cb();
}
function task2(cb) {
console.log("Task 2");
cb();
}
function task3() {
console.log("Task 3");
}
task1(() => {
task2(() => {
task3();
});
});
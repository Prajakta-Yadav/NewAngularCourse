function task1() {
return Promise.resolve("Task 1 done");
}
function task2() {
return Promise.resolve("Task 2 done");
}
task1()
.then((res) => {
console.log(res);
return task2();
})
.then((res) => console.log(res));
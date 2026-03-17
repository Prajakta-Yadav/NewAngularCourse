function taskA() {
return new Promise((resolve) =>
setTimeout(() => resolve("Task A done"), 1000)
);
}
function taskB() {
return new Promise((resolve) =>
setTimeout(() => resolve("Task B done"), 1000)
);
}
async function runTasks() {
let a = await taskA();
console.log(a);
let b = await taskB();
console.log(b);
}
runTasks();
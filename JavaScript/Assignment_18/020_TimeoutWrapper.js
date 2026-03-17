function timeoutPromise(promise, time) {
let timeout = new Promise((_, reject) =>
setTimeout(() => reject("Timeout"), time)
);
return Promise.race([promise, timeout]);
}
timeoutPromise(
new Promise((resolve) => setTimeout(() => resolve("Done"), 3000)),
2000
).catch((err) => console.log(err));
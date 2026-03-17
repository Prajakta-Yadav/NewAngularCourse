let promise1 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Promise resolved after 2 seconds");
}, 2000);
});
promise1.then((msg) => console.log(msg));
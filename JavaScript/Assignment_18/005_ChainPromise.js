Promise.resolve(5)
.then((num) => num * 2)
.then((num) => num + 10)
.then((num) => console.log("Final value:", num));
Promise.resolve("Start")
.then((res) => {
console.log(res);
throw new Error("Something went wrong");
})
.then(() => console.log("This won't run"))
.catch((err) => console.log(err.message));
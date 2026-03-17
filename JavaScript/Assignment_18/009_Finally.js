Promise.resolve("Completed")
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() => console.log("Cleanup done"));
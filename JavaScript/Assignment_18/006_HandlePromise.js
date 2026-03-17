let promise2 = new Promise((resolve, reject) => {
let success = true;
if (success) resolve("Success");
else reject("Failed");
});
promise2
.then((res) => console.log(res))
.catch((err) => console.log(err));
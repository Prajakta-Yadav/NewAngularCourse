function checkNumber(num) {
return new Promise((resolve, reject) => {
if (num < 0) {
reject("Number is negative");
} else {
resolve("Number is positive");
}
});
}
checkNumber(-5)
.then((res) => console.log(res))
.catch((err) => console.log(err));
function checkEven(num) {
return new Promise((resolve, reject) => {
if (num % 2 === 0) {
resolve("Number is Even");
} else {
reject("Number is Odd");
}
});
}
checkEven(3)
.then((res) => console.log(res))
.catch((err) => console.log(err));
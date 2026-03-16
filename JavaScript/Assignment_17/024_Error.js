function getData(callback) {
let error = null;
let data = "User Data";
callback(error, data);
}
getData((err, result) => {
if (err) {
console.log("Error:", err);
} else {
console.log("Result:", result);
}
});
function fetchData(callback) {
setTimeout(() => {
callback("Data received");
}, 2000);
}
fetchData((data) => {
console.log(data);
});
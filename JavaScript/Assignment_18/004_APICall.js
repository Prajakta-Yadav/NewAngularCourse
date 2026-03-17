function fetchData() {
return new Promise((resolve) => {
setTimeout(() => {
resolve("Data received from API");
}, 2000);
});
}
fetchData().then((data) => console.log(data));
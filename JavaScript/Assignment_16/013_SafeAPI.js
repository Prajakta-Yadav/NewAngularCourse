function handleApi(data) {
try {
if (!data) {
throw new Error("API data missing");
}
console.log("Data received:", data);
} catch (error) {
console.log(error.message);
}
}
handleApi(null);
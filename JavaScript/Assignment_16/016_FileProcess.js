function processFile(type) {
try {
if (type !== "txt") {
throw new Error("Invalid file type");
}
console.log("File processed");
} catch (error) {
console.log(error.message);
}
}
processFile("jpg");
let attempts = 0;
function riskyTask() {
attempts++;
if (Math.random() < 0.7 && attempts < 3) {
throw new Error("Task failed");
}
console.log("Task successful");
}
try {
riskyTask();
} catch (error) {
console.log("Retrying...");
riskyTask();
}
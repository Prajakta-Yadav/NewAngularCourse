async function retryTask() {
let attempts = 0;
while (attempts < 3) {
try {
attempts++;
if (Math.random() < 0.7) throw new Error("Failed");
console.log("Success");
return;
} catch {
console.log("Retrying...");
}
}
}
retryTask();
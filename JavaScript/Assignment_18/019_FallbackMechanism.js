async function safeFetch() {
try {
throw new Error("API failed");
} catch {
return "Default data";
}
}
safeFetch().then((res) => console.log(res));
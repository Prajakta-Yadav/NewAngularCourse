function safeParse(str) {
try {
return JSON.parse(str);
} catch (error) {
return {};
}
}
console.log(safeParse("invalid json"));
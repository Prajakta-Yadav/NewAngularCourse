function test() {
try {
return 1;
} finally {
return 2;
}
}
console.log(test()); // 2
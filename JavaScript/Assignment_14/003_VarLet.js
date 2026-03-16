//var uses same variable in all loops
for (var i = 1; i <= 3; i++) {
setTimeout(function () {
console.log("var:", i);
}, 1000);
}


//let creates new block-scoped variable in each iteration
for (let j = 1; j <= 3; j++) {
setTimeout(function () {
console.log("let:", j);
}, 1000);
}
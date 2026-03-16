console.log(a);
var a = 10;


/**
 * var is hoisted to top, but initialized with undefined.
Internally JavaScript sees:
var a;
console.log(a);
a = 10;
 */
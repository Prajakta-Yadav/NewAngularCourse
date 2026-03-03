let a = {};

let b = [];

console.log(a.__proto__ === Object.prototype);

console.log(b.__proto__.__proto__ === Object.prototype);

console.log(typeof(a));

console.log(typeof(b));
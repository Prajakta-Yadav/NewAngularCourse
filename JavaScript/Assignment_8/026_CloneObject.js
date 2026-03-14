let original = {name:"Prajakta", age:25};
let clone = {...original};
clone.age = 30;
console.log(original);
console.log(clone);
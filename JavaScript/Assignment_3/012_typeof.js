console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});


let data = [1,2,3];
console.log(Array.isArray(data));


let message = "Hello World";  //Global variable access anywhere
function show(){
console.log(message);
}
show();

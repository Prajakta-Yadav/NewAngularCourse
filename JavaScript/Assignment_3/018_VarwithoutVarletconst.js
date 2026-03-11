x = 100;
console.log(x);


//this create global variable automatically. which bad practice. 

//Object properties can change but reference cannot

const car = {
brand: "Toyota"
};
car.brand = "Honda"; // Allowed
// car = {} // Error
console.log(car);
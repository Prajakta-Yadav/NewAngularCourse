class Car {
constructor(brand, model) {
this.brand = brand;
this.model = model;
}
displayDetails() {
console.log(this.brand + " " + this.model);
}
}
let car1 = new Car("Toyota", "Fortuner");
car1.displayDetails();
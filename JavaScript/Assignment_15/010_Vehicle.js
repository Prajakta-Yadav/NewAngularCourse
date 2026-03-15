class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
}
class Car extends Vehicle {
    constructor(brand, fuelType) {
        super(brand);
        this.fuelType = fuelType;
    }
}
let c = new Car("Honda", "Petrol");
console.log(c);
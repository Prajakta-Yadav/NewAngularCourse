class Vehicle {
constructor(type) {
this.type = type;
}
}
class Bike extends Vehicle {
constructor(type, mileage) {
super(type);
this.mileage = mileage;
}
}
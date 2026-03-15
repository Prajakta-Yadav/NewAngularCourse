class Shape {

    calculateArea() {
        console.log("Area calculation");
    }
}

class Circle extends Shape {

    calculateArea() {
        console.log("Circle Area:", 3.14 * 5 * 5);
    }
}
class Rectangle extends Shape {

    calculateArea() {
        console.log("Rectangle Area:", 10 * 5);
    }
}

let R = new Rectangle();
R.calculateArea();
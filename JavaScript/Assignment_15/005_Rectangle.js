class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
area() {

    return this.width * this.height;
    }
}

let r = new Rectangle(10, 5);
console.log("Area:", r.area());
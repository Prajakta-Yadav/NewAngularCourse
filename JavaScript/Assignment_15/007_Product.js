class Product {
    constructor(price) {
        this.price = price;
}

    discount(percent) {
        return this.price - (this.price * percent / 100);
    }
}
let p = new Product(1000);
console.log(p.discount(10));
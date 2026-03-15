class Product {
    constructor(price) {
        this.price = price;
    }
}

class Electronics extends Product {
        tax() {
            return this.price * 0.18;
        }
    }

    class Clothing extends Product {

        tax() {

            return this.price * 0.05;
        
        }
}

let c = new Clothing(1000);

console.log(c.tax());
class Payment {

    processPayment() {
        console.log("Processing payment");
    }
}

class CreditCard extends Payment {

    processPayment() {
        console.log("Payment via Credit Card");
    }
}

class UPI extends Payment {

    processPayment() {
        console.log("Payment via UPI");
    }
}

let p = new UPI();
p.processPayment();

class Account {
    constructor(balance) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        this._balance = amount;
    }
}
let a = new Account(1000);
a.balance = 2000;
console.log(a.balance);
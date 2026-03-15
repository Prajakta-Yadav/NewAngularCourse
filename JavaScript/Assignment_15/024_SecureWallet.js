class Wallet {
constructor(balance) {
this._balance = balance;
}
deposit(amount) {
this._balance += amount;
}
withdraw(amount) {
this._balance -= amount;
}
getBalance() {
return this._balance;
}
}

let w = new Wallet();

console.log(w.getBalance());
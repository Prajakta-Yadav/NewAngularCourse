class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;

    }
}

let acc = new BankAccount("Rahul", 5000);
acc.deposit(2000);
acc.withdraw(1000);
console.log(acc.balance);
class BankAccount {
constructor(balance) {
this.balance = balance;
}
withdraw(amount) {
if (amount > this.balance) {
throw new Error("Insufficient balance");
}
this.balance -= amount;
console.log("Remaining balance:", this.balance);
}
}
try {
let acc = new BankAccount(1000);
acc.withdraw(2000);
} catch (error) {
console.log(error.message);
}
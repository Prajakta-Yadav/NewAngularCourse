let account = {
    holder: "Prajakta",
    balance: 1000,
    deposit(amount){
    this.balance += amount;
},
    withdraw(amount){
    this.balance -= amount;
}
};
    account.deposit(500);
    account.withdraw(200);
    console.log(account.balance);
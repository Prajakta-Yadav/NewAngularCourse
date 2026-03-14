let bank = {
balance: 1000,
deposit: function(amount){
this.balance += amount;
}
};
bank.deposit(500);
console.log(bank.balance)
function createAccount() {
    let balance = 1000;
    return {

        deposit: function(amount) {
            balance += amount;
            console.log("Deposited:", amount, "Balance:", balance);
        },

        withdraw: function(amount) {

            if (amount <= balance) {
                balance -= amount;
                console.log("Withdrawn:", amount, "Balance:", balance);
            } 
            else {
                console.log("Insufficient balance");
            }
        },

        getBalance: function() {
            return balance;
        
        }
    };
}

let account = createAccount();
account.deposit(500);
account.withdraw(200);

console.log("Final Balance:", account.getBalance());
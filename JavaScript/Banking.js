
function bankAccount(balance){
    return{
        deposite:function(amount){
            balance+= amount;
            console.log("Balance : ",balance);
        },
        withdraw:function(amount){
            balance-=amount;
            console.log("Balance : ",balance);
        }
    };
}

let account = bankAccount(0);

account.deposite(500);
account.deposite(400);
account.deposite(200);

account.withdraw(100);
account.withdraw(300);
account.withdraw(500);
account.withdraw(100);

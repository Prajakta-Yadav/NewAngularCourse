let cart = {
products: [
    {
        name:"Laptop", 
        price:50000, 
        qty:1
    },

    {
        name:"Mouse", 
        
        price:500, qty:2
    }
],

totalBill(){
let total = 0;
this.products.forEach(p => {
total += p.price * p.qty;
});

return total;
}

};

console.log(cart.totalBill());
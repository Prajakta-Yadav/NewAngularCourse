let products = [
{name:"Laptop", price:50000, qty:1},
{name:"Mouse", price:500, qty:2}
];
let totalBill = products.reduce((acc,item)=>{
return acc + item.price * item.qty;
},0);
console.log("Total Bill:", totalBill);
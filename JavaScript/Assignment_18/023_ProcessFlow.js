Promise.resolve("Order Placed")
.then((msg) => {
console.log(msg);
return "Order Processed";
})
.then((msg) => {
console.log(msg);
return "Order Shipped";
})
.then((msg) => console.log(msg));
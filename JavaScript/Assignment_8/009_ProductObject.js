let product = {
name: "Laptop",
price: 50000,
discountPrice: function(discount){
return this.price - (this.price * discount / 100);
}
};
console.log(product.discountPrice(10));
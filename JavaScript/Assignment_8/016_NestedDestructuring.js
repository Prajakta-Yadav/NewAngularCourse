let person3 = {
name: "Amit",
address: {
    city: "Pune",
    state: "MH"
}
};
let {address:{city}} = person3;
console.log(city);
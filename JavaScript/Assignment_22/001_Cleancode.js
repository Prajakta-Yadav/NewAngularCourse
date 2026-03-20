//messy code 
/*
function calc(a,b,c){
    let r=a*b
    let t=r+c
    return t
}

console.log(calc(34, 56,78)); 

*/

//clean code

function calculateTotalPrice(price, quantity, tax){
    const total = price * quantity
    return total + tax
}

console.log(calculateTotalPrice(566, 3, 10));

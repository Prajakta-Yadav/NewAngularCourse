// pure
function pure(a,b){

    return a+b;
}
// impure
let x = 10;
function impure(a){

    return a + x;
}

console.log(pure(5,3));
console.log(impure(5));
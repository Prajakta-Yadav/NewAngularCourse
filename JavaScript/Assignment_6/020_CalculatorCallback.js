function calculate(a,b,operation){

    return operation(a,b);
}

function add(a,b){

    return a+b;
}

console.log(calculate(5,3,add));
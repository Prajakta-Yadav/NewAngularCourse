const sum = (...numbers) => {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
};

console.log(sum(10, 20));
console.log(sum(1, 2, 3, 4, 5));


//Arrow function + rest parameter = flexible modern solution
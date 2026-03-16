function createHeavyClosure() {

    let largeData = new Array(1000000).fill("data");


    return function() {
        console.log(largeData[0]);
    };
}

let fn = createHeavyClosure();

console.log(fn());
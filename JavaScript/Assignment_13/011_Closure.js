function outer() {
    let message = "Hello from outer function";

    function inner() {
        console.log(message);
    }
    return inner;
}

let result = outer();
result();

//Inner function remembers outer variable even after outer function finishes.
//This is called closure.
let a = "Global";
function outer() {
    let b = "Outer";
    function inner() {
        let c = "Inner";
        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();
function once(fn) {
    let called = false;
        return function() {
            if (!called) {
            called = true;
            
            fn();
        } 
        else {
            console.log("Function already called");
        }
    };
}

let welcome = once(function() {
    console.log("Welcome!");
});

welcome();
welcome();
welcome();

//Closure stores whether function already ran or not
function memoizedSquare() {
    let cache = {};
        return function(num) {
        if (cache[num]) {
            console.log("From cache:", cache[num]);
            return cache[num];

        } 
        else {
    
            let result = num * num;
            cache[num] = result;
            console.log("Calculated:", result);
            return result;
        }
    };
}

let square = memoizedSquare();
square(5);
square(5);
square(6);
square(6);


/**
 * Old result is saved in cache.
Same input returns cached value.
 */
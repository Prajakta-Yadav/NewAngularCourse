function timer() {
    let count = 0;
    return function() {
        setInterval(function() {
            count++;
            console.log("Count:", count);
        }, 1000);
    };
}

let startTimer = timer();
startTimer();
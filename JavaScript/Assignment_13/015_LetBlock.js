for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

//let creates new block-scoped variable in each iteration.
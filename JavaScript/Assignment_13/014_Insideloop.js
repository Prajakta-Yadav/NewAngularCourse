for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
    console.log(i);
    }, 1000);
}

/**
 * Because var is function scoped.
All callbacks use same i, and loop ends with i = 4.
 */
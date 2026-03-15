function divide(a, b) {

    try {

        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        console.log("Result:", a / b);

    } catch (error) {
        console.log(error.message);
    }   

}

    divide(10, 0);
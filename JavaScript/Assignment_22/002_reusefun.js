//large function

/*
function processOrder(){
    console.log("Validate order")
    console.log("Calculate price")
    console.log("Send confirmation")
}

processOrder();

*/ 

//small and reusable

function validateOrder(){
    console.log("Validate order")
}

function calculatePrice(){
    console.log("Calculate price")
}

function sendConfirmation(){
    console.log("Send confirmation")
}

function processOrder(){

    validateOrder()
    calculatePrice()
    sendConfirmation()
}

processOrder(); 
function main(callback){

    console.log("Main function");
    callback();
}

function greet(){
    console.log("Callback executed");
}

main(greet);
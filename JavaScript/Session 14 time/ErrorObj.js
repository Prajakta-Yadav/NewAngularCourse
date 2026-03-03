function checkAge(age){
    if(age<18){
        throw new Error("You must be 18+");
    }
    else{
        return "Access Granted"
    }
}

try{
    console.log(checkAge(23));
}

catch(error){
    console.log(error.option);
    console.log(error.message);
}

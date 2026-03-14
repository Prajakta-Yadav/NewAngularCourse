function validateEmail(email){
if(email.includes("@") && email.includes(".")){
console.log("Valid Email");
}
else{
console.log("Invalid Email");
}
}
validateEmail("test@gmail.com");
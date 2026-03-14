function checkPassword(password) {
let hasNumber = /\d/.test(password);
if(password.length >= 8 && hasNumber){
console.log("Strong Password");
}
else{
console.log("Weak Password");
}
}
checkPassword("pass1234");
export function isEmail(email){
return email.includes("@");
}
export function isPasswordValid(password){
return password.length >= 6;
}
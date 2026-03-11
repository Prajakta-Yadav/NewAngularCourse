let num = 1234;
let reverse = 0;
for( ; num > 0; num = Math.floor(num/10)){
let digit = num % 10;
reverse = reverse*10 + digit;
}
console.log(reverse);
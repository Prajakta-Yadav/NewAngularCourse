let arr = [10,20,5,40];
let max = arr[0];
for(let value of arr){
if(value > max){
max = value;
}
}
console.log(max)
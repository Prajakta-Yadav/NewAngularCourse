let arr = [5,10,25,7,3];
let largest = arr[0];
for(let i=0;i<arr.length;i++){
if(arr[i] > largest){
largest = arr[i];
}
}
console.log(largest);
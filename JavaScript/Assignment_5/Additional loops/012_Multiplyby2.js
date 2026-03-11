let arr = [1,2,3];
arr.forEach(function(value,index){
arr[index] = value*2;
});
console.log(arr);

arr.forEach(function(value,index){
console.log(index,value);
});

let sum = 0;
arr.forEach(function(value){
sum += value;
});
console.log(sum);
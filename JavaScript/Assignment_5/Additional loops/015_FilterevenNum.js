let arr = [1,2,3,4,5,6];
let even = [];
arr.forEach(function(value){
if(value % 2 === 0){
even.push(value);
}
});
console.log(even);
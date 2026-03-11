let nums4 = [10,50,30,90,20];
let max = nums4.reduce((acc,num) => acc > num ? acc : num);
console.log(max);
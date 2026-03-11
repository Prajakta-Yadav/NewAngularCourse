let nums8 = [5,2,8,2,3,5,1];
nums8.sort((a,b)=>a-b);
let uniqueNums = nums8.filter((v,i,a)=>a.indexOf(v)===i);
console.log(uniqueNums);
let nums2 = [1,2,2,3,4,4,5];
let unique = nums2.filter((value,index,array) =>
array.indexOf(value) === index
);
console.log(unique);
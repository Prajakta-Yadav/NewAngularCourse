let words = ["apple","banana","apple","orange","banana","apple"];
let count = words.reduce((acc,word) => {
acc[word] = (acc[word] || 0) + 1;
return acc;
},{});
console.log(count);
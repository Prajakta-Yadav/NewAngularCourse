let scores = [120,300,150,400,250];
scores.sort((a,b)=>b-a);
let highest = scores[0];
let topThree = scores.slice(0,3);
console.log("Highest:", highest);
console.log("Top 3:", topThree);
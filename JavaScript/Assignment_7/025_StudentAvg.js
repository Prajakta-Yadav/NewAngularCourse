let students3 = [
{name:"Rahul", marks:80},
{name:"Amit", marks:70},
{name:"Pooja", marks:90}
];
let totalMarks = students3.reduce((acc,s)=>acc + s.marks,0);
let avg = totalMarks / students3.length;
console.log("Average:", avg);
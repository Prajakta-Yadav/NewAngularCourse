let studentMarks = [
{name:"Rahul", marks:55},
{name:"Amit", marks:75},
{name:"Pooja", marks:85}
];
let passed = studentMarks.filter(s => s.marks > 60);
console.log(passed);
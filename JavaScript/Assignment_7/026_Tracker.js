let expenses = [500,1200,800,2000];
let totalExpense = expenses.reduce((acc,e)=>acc+e,0);
let highExpense = expenses.filter(e => e > 1000);
console.log("Total:", totalExpense);
console.log("Above 1000:", highExpense);
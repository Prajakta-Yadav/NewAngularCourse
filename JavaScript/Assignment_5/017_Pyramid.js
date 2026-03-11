for(let i=1;i<=5;i++){
let row = "";
for(let s=1;s<=5-i;s++){
row += " ";
}
for(let j=1;j<=i;j++){
row += "* ";
}
console.log(row);
}
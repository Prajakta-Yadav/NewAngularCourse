let result = {
marks: [70,80,90],
average(){
let sum = 0;
for(let m of this.marks){
sum += m;
}
return sum / this.marks.length;
}
};
console.log(result.average());
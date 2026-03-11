
let student = {
name:"Amit",
age:21,
course:"JS"
};

let count = 0;
for(let key in student){
count++;
}
console.log(count);
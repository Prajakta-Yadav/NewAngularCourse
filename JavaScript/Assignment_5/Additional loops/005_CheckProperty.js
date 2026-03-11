
let student = {
name:"Amit",
age:21,
course:"JS"
};

let found = false;
for(let key in student){
if(key === "age"){
found = true;
}
}
console.log(found);
let obj = {a:10,b:20,c:30};
for(let key in obj){
obj[key] = obj[key] + 10;
}
console.log(obj)
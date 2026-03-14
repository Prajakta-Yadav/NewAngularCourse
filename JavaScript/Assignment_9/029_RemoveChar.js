function removeDuplicates(str){
let result = "";
for(let char of str){
if(!result.includes(char)){
result += char;
}
}
return result;
}
console.log(removeDuplicates("programming"));
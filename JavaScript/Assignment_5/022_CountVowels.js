let str = "javascript";
let count = 0;
for(let i=0;i<str.length;i++){
let ch = str[i];
if("aeiou".includes(ch)){
count++;
}
}

console.log("Vowels:",count);
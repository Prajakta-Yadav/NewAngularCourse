//Bad
/*
let count = 0
function increment(){
count++
}
*/


//Any script can change count.

//Better
function increment(){
let count = 0
count++
console.log(count)
}

increment();

//variable stays inside function
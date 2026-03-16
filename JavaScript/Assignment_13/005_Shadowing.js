let name = "Prajakta";
function showName() {
let name = "Teju";
console.log("Inside function:", name);
}


showName();
console.log("Outside function:", name);


//Inside variable with same name hides outer variable.
//This is called shadowing
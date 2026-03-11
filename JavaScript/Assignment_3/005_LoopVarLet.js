for (var i = 0; i<3; i++){
    console.log(i);
}

console.log("Outside loop:", i); //Accessible var scope is functional not block

for(let j=0; j<3; j++){
    console.log(j);
}

//console.log(j); // reference Error  j is not defined. let is a block scope

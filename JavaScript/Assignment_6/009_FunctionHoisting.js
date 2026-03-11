// Function declaration


greet();
function greet(){
    console.log("Hello");

}


//function Expression


// greeting();  //  Error 

//Function expressions are not hoisted like declarations. 
let greeting  = function(){
    console.log("Hello I am function Expression");


}

greeting();

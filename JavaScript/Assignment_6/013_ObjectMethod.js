// Normal Function

let person = {
    name: "Prajakta",
    greet: function(){
        console.log(this.name);
    }
};

person.greet();

//Arrow function

let Person = {
    fname: "Praju",
    greeting: () => {
        console.log(this.name);
    }
};

Person.greeting(); //Undefined 


//Arrow () does not bind this to person. 
//It takes this from the outer scope. 

let Person1 = {
    firstName: "Tejaswi", 
    greet1 : function(){
        setTimeout(() => {
            console.log(this.firstName);

        }, 1000);

    }
}

Person1.greet1(); 


//Arrow () borrow this from their surrounding(Parent) scope. This called Lexical this. 

//Arrow function does not create their own this
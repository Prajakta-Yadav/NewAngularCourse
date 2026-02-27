const obj = {
   name: "Rahul",
   greet: function() {
      console.log(this.name); //this =obj
   }
};

//obj.greet();  //object called the function


"use strict";

function Person(name){
    this.name = name;
}

let p1 = new Person("Rahul");
console.log(p1);

const obj1 = {};
obj1.name = "Rahul";
obj1.age = 25;

console.log(obj1);

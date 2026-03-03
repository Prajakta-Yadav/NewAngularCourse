function Person(name){
    this.name = name;

}

Person.prototype.sayhi = function(){
    console.log("Hi " + this.name);

}

let obj = new Person("Prajakta");

obj.sayhi();

console.log(obj.__proto__ === Person.prototype);


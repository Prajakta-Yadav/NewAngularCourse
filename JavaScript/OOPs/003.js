function Person(name){
    this.name = name;

}

Person.prototype.sayhi = function(){
    console.log("Hi " + this.name);

}

let obj = new Person("Omkar");

obj.sayhi();


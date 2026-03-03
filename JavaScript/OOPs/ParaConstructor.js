
class Student{
    name = "Omkar";

    constructor(name){
        this.name = name;
    }
    greet(){
        return "Hello "+ this.name;
    }
}

let obj1 = new Student("Fork");
let obj2 = new Student("Infosystems");
let obj3 = new Student("Students");

console.log(obj1.greet());
console.log(obj2.greet());
console.log(obj3.greet());

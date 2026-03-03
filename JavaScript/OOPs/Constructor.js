
class Student{
    name = "Omkar";
    #nmes = "Patil"
    constructor(){
        console.log("We are in constructor");
    }
    greet(){
        return "Hello "+ this.#nmes;
    }
}

let obj = new Student();
console.log(obj.greet());
console.log(obj.name);
console.log(obj.nmes);

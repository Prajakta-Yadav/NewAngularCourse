
class Student{
    name = "Omkar";

    greet(){
        return "Hello "+ this.name;
    }
}

let obj = new Student();
console.log(obj.greet());
console.log(obj.name);

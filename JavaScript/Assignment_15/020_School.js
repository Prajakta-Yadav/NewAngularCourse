class Person {
constructor(name) {
this.name = name;
}
}
class Student extends Person {
study() {
console.log(this.name + " is studying");
}
}
class Teacher extends Person {
teach() {
console.log(this.name + " is teaching");
}
}

let T = new Teacher("Prajakta");

T.teach();
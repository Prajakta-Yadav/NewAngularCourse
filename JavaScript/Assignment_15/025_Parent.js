class Parent {
constructor(name) {
this._name = name;
}
getName() {
return this._name;
}
}
class Child extends Parent {
display() {
console.log("Name:", this.getName());
}
}
let obj1 = new Child("Prajakta");
obj1.display();
class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}
class Child extends Parent {
    greet() {
        super.greet();
        console.log("Hello from Child");
    }
}
let obj = new Child();
obj.greet();
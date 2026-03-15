class Animal {
    speak() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}
let d = new Dog();
d.speak();

let a = new Animal();
a.speak();
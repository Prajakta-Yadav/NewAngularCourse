class Person {
   constructor(obj) {
      this.name = obj.name;
      this.age = obj.age;
   }
}

const p1 = new Person({name: "Rahul", age: 25});
const p2 = new Person(p1);

console.log("P1:", p1);
console.log("P2:",  p2);

class Person1 {
   static greet() {
      console.log("Hello");
   }
}

Person1.greet();
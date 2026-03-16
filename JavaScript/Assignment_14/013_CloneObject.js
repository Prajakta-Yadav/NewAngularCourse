const user1 = {
    name: "Prajakta",
    age: 22
};

const user2 = { ...user1 };
user2.age = 25;

console.log("Original:", user1);
console.log("Cloned:", user2);

//Spread creates copy of object.
//Changing clone does not affect original for top-level properties.
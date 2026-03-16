const user = {
    name: "Omkar",
    address: {
        city: "Karad",
        state: "Maharashtra"
    }
};

const {
    address: { city, state }
} = user;

console.log(city);
console.log(state);

//Nested destructuring allows direct access to inner object properties.
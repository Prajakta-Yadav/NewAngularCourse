const student = {
    name: "Omkar"
};

// Without optional chaining
//console.log(student.address.city); // Error

// With optional chaining
console.log(student.address?.city); // undefined
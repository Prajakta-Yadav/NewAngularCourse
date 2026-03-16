const student = {
name: "Omkar",
normalFunction: function () {
console.log("Normal function this.name:", this.name);
},
arrowFunction: () => {
console.log("Arrow function this.name:", this.name);
}
};
student.normalFunction();
student.arrowFunction();

//Normal function gets its own this
//Arrow function does not have its own this
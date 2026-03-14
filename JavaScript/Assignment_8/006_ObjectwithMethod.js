let person1 = {
firstName: "Rahul",
lastName: "Sharma",
fullName: function(){
return this.firstName + " " + this.lastName;
}
};
console.log(person1.fullName());
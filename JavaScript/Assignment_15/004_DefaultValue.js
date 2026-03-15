class User {
    constructor(name, role = "Guest") {
        this.name = name;
        this.role = role;
    }
}
let u1 = new User("Prajakta");
console.log(u1);
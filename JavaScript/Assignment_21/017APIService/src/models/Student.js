export class Student {
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }

    getDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Grade: ${this.grade}`;
    }
}
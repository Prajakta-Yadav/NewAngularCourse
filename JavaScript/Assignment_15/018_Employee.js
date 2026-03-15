class Employee {

    calculateSalary() {}
}

class FullTime extends Employee {

    calculateSalary() {
        return 50000;
    }
}

class PartTime extends Employee {

    calculateSalary() {
        return 20000;
    }
}

let data = new FullTime();
console.log(data.calculateSalary());
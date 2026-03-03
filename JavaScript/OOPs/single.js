//Parent class Base class

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;

    }

    getDetails(){
        return `${this.name} earns RS:  + ${this.salary}`
    }
}

//child class or derived class from Employee class

class Developer extends Employee{
        constructor(name, salary, language){
            super(name,salary);
            this.language = language;
        }

        getDetails(){
            return `${super.getDetails()} and codes in ${this.language}`

        }
}

class Manager extends Employee{
    constructor(name, salary, teamSize){
        super(name, salary);
        this.teamSize = teamSize;

    }

    getDetails(){
        return `${super.getDetails()} and manages ${this.teamSize} colleagues`
    }
}

let dev = new Developer ("Prajakta", 18000, "Angular");

let man = new Manager("Praju", 40000, 8);

function showDev(){
    document.getElementById("output").innerText = dev.getDetails();
}


function showMan(){
    document.getElementById("output").innerText = man.getDetails();
}
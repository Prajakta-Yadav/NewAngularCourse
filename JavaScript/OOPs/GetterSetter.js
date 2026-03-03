class Student{

    #marks;
    constructor(marks){
        this.#marks = marks;
    }

    getmarks(){
        return this.#marks;
    }

    setmarks(value){
        if(value >=0 && value <=100){
            this.#marks = value;
            return true;
        }
        else {
            console.log("Invalid Marks!!");
            return false;
        }
    }
}

let obj = new Student(40);
console.log(obj.getmarks());

console.log(obj.setmarks(50));
console.log(obj.getmarks());

console.log(obj.setmarks(120));
console.log(obj.getmarks());
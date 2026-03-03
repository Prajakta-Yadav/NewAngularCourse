class Student{

    #marks;
    constructor(marks){
        this.#marks = marks;
    }

    get marks(){
        return this.#marks;
    }

    set marks(value){
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

let obj = new Student(30);
console.log(obj.marks);

obj.marks = 40;
console.log(obj.marks);

obj.marks = 410;
console.log(obj.marks);

obj.marks = 70; 
console.log(obj.marks);
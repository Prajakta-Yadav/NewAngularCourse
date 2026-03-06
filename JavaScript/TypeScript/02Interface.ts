
 interface Student{
      readonly id:number;
    name:string;
    marks:number;
}

let stud:Student = {
    id:1,
    name:"omkar",
    marks:85
}

stud.marks = 20;

// stud.id = 30;

const basicOut = document.getElementById("basicInterface") as HTMLElement;
basicOut.innerText = `${stud.id} -  ${stud.name} - ${stud.marks}`

interface Calculator{
    add(a:number,b:number):number;
}

let calc : Calculator = {
    add(x,y){
        return x+ y;
    }
}

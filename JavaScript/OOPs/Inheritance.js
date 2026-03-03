class Parent{
    constructor(){
        console.log("Hello Employee Constructor")
    }

    method(){
        console.log("Parent Method");
    }

}

class child extends Parent{
    constructor(){
        super();
        console.log("Child Constructor");
    }

    method(){
        console.log("Child Method");
        super.method();
    }
}

let childObj = new child();
childObj.method();
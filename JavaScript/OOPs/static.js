class MathUtils{
    static add(a,b){
        return a+ b;
    }

    mult(a,b){
        this.a = a;
        this.b = b;
        return this.a * this.b;
    }
}


let obj = new MathUtils();
console.log(obj.mult(10,20));
console.log(MathUtils.add(10,20));


class Test {
    constructor(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
}
let t = new Test(50);
console.log(t.getValue());
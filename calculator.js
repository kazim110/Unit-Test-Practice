class Calculator{

    constructor(param1,param2){
        this.param1=param1;
        this.param2=param2;
    }

    add() {
        return (this.param1 + this.param2);
    }

    subtract() {
        return Math.abs(this.param1 - this.param2);
    }

    divide() {
        return (this.param1 / this.param2);
    }

    multiply() {
        return (this.param1 * this.param2);
    }
}

const calc= new Calculator(4,5);

module.exports = Calculator;
const Calculator = require("./calculator.js");

const calc1 = new Calculator(2,4);
const calc2 = new Calculator(5,1);
const calc3 = new Calculator(2,10);

describe('add section',()=>{
    test('add',()=>{
        expect(calc1.add()).toBe(6);
    });
    test('add',()=>{
        expect(calc2.add()).toBe(6);
    });
    test('add',()=>{
        expect(calc3.add()).toBe(12);
    });
});

describe('subtract section',()=>{
    test('subtract',()=>{
        expect(calc1.subtract()).toBe(2);
    });
    test('subtract',()=>{
        expect(calc2.subtract()).toBe(4);
    });
    test('subtract',()=>{
        expect(calc3.subtract()).toBe(8);
    });
});

describe('multiply section',()=>{
    test('multiply',()=>{
        expect(calc1.multiply()).toBe(8);
    });
    test('multiply',()=>{
        expect(calc2.multiply()).toBe(5);
    });
    test('multiply',()=>{
        expect(calc3.multiply()).toBe(20);
    });
});

describe('divide section',()=>{
    test('divide',()=>{
        expect(calc1.divide()).toBe(0.5);
    });
    test('divide',()=>{
        expect(calc2.divide()).toBe(5);
    });
    test('divide',()=>{
        expect(calc3.divide()).toBe(0.2);
    });
});
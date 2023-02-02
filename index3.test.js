const {test} = require('@jest/globals');
const Calculator = require('./index3.js');
let calculator;

describe('Add', () => {
    beforeEach(() => {
        calculator = new Calculator();
    });
    test('adds 1 plus 2 to equal 3', () =>{
    expect(calculator.add(1,2 )).toBe(3);
});

test('adds 10 + 10 to equal 20', () => {
    expect(calculator.add(10, 10)).toBe(20);
});

test('adds 60 plus 1 to equal 61', () => {
    expect(calculator.add(60, 1)).toBe(61);
});
});

describe('Subtract', () => {
    beforeEach(() => {
        calculator = new Calculator();
    });

    test('subtracts 1 from 2 to equal 1', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test('subtracts 10 from 20 to equal 10', () => {
    expect(calculator.subtract(20, 10)).toBe(10);
  });
})

describe('Divide', () =>{
    beforeEach(() => {
        calculator = new Calculator();
    });

    test('divide 4 by 2 to equal 2', () => {
        expect(calculator.divide(4, 2)).toBe(2);
    });


    test('divide 14 by 8 to equal 1.75', () => {
        expect(calculator.divide(14, 8)).toBe(1.75);
    });
})

 describe('Multiplies', () => {
    beforeEach(() => {
        calculator = new Calculator();
    });

    test('multiply 2 and 2 to equal 4', () => {
        expect(calculator.multiply(2, 2)).toBe(4);
    });

    test('multiply 8 and 2 to equal 16', () => {
        expect(calculator.multiply(8, 2)).toBe(16);
    });
 })


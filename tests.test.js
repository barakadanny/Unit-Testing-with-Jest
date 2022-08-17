const strL = require('./stringLength');
const reverseString = require('./reverseString');
const Calculator = require('./calculator');

// string length Note: must be between 1 and 10
describe('Test to check the length of a string', () => {
  test('string dance == 5', () => {
    const word = 'dance';
    const wordLength = strL(word);

    expect(wordLength).toBe(5);
  });

  test('string dancedancedancedance == 20', () => {
    const word = 'dancedancedancedance';
    const wordLength = strL(word);

    expect(wordLength).toBe(20);
  });
});

// string reversal
describe('Test to check reversal of a string', () => {
  test('Reverse Hello == olleH', () => {
    const word = 'Hello';
    const wordReverse = reverseString(word);
    expect(wordReverse).toBe('olleH');
  });

  test('Reverse dance == ecnad', () => {
    const word = 'dance';
    const wordReverse = reverseString(word);
    expect(wordReverse).toBe('ecnad');
  });
});

// Calculator
describe('Test for basic math operations on two numbers', () => {
  test('Add 2 + 1 == 3', () => {
    const value1 = 2;
    const value2 = 1;
    const input = new Calculator(value1, value2);
    const result = input.add();
    expect(result).toBe(3);
  });

  test('subtract 2 - 1 == 1', () => {
    const value1 = 2;
    const value2 = 1;
    const input = new Calculator(value1, value2);
    const result = input.subtract();
    expect(result).toBe(1);
  });

  test('divide 4 - 2 == 2', () => {
    const value1 = 4;
    const value2 = 2;
    const input = new Calculator(value1, value2);
    const result = input.divide();
    expect(result).toBe(2);
  });

  test('multiply 4 * 2 == 8', () => {
    const value1 = 4;
    const value2 = 2;
    const input = new Calculator(value1, value2);
    const result = input.multiply();
    expect(result).toBe(8);
  });
});

const strL = require('./stringLength');
const reverseString = require('./reverseString');

// for example dance == 5;
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

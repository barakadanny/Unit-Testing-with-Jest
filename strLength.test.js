const strL = require('./stringLength');

// for example dance == 5;
describe('Tests', () => {
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

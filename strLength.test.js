const strL = require('./stringLength');

// for example dance == 5;
describe('Tests', () => {
  test('string between 1 and 10', () => {
    const word = 'dance';
    const wordLength = strL(word);

    expect(wordLength).toBe(5);
  });
});

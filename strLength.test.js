const strL = require('./stringLength');

// for example dance == 5;
describe('Tests', () => {
  it('word between 1 and 10', () => {
    expect(strL('dancedancedance')).toThrow(
      'String length must be between 1 and 10'
    );
  });

  it('when word = dance the result is 5', () => {
    expect(strL('dance')).toBe(5);
  });
});

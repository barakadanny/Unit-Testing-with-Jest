// function to reverse a string
const reverseString = (str) => {
  const word = str.split('').reverse().join('');
  return word;
};

module.exports = reverseString;

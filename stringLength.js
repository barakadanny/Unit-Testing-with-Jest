const stringLength = (str) => {
  const word = str.length;
  if (word < 1 || word > 10) {
    throw 'String length must be between 1 and 10';
  } else {
    return word;
  }
};

module.exports = stringLength;

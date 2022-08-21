class Calculator {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }
  add() {
    const sum = this.value1 + this.value2;
    return sum;
  }
  subtract() {
    const sub = this.value1 - this.value2;
    return sub;
  }
  divide() {
    const div = this.value1 / this.value2;
    return div;
  }
  multiply() {
    const mul = this.value1 * this.value2;
    return mul;
  }
}

module.exports = Calculator;

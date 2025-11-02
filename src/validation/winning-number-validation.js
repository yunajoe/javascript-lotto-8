import ValidationError from '../error/validation-error.js';

class WinningNumberValidation extends ValidationError {
  constructor(input) {
    super(input);
    this.#validate(input);
    this.input = input;
  }

  #splitInputToArray(input) {
    // const inputArr2 = input.split(',').filter((value) => value.trim());
    const inputArr = input
      .split(',')
      .filter((value) => value.trim())
      .map((item) => Number(item));
    return inputArr;
  }

  #validate(input) {
    this.checkEmpty(input);
    const inputArr = this.#splitInputToArray(input);
    this.checkArrayLength(inputArr);
    inputArr.forEach((value) => {
      this.checkValidChar(value);
      this.checkNumberRange(value);
    });
    this.checkDuplicatedNumber(inputArr);
  }
}

export default WinningNumberValidation;

import ValidationError from '../error/validation-error.js';

class WinningNumberValidation extends ValidationError {
  constructor(input) {
    super(input);
    this.#validate(input);
    this.input = input;
  }

  #validate(input) {
    this.checkEmpty(input);
    const inputArr = input
      .split(',')
      .filter((value) => value)
      .map((item) => Number(item));

    this.checkArrayLength(inputArr);

    inputArr.forEach((value) => {
      this.checkValidChar(value);
      this.checkNumberRange(value);
    });

    this.checkDuplicatedNumber(inputArr);
  }
}

export default WinningNumberValidation;

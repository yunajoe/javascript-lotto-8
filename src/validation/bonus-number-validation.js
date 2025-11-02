import ValidationError from '../error/validation-error.js';

class BonusNumberValidation extends ValidationError {
  constructor(input) {
    super(input);
    this.#validate(input);
    this.input = input;
  }

  #validate(input) {
    this.checkEmpty(input);
    const numInput = Number(input);
    this.checkValidChar(numInput);
    this.checkNumberRange(numInput);
  }
}

export default BonusNumberValidation;

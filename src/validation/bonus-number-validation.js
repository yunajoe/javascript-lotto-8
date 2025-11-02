import ValidationError from '../error/validation-error.js';

class BonusNumberValidation extends ValidationError {
  constructor(input) {
    super(input);
    this.#validate(input);
    this.input = input;
  }

  #validate(input) {
    this.checkEmpty(input);
    this.checkValidChar(input);
    this.checkNumberRange(input);
  }
}

export default BonusNumberValidation;

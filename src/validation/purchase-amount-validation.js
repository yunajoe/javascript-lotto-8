import ValidationError from '../error/validation-error.js';

class PurchaseValidation extends ValidationError {
  constructor(input) {
    super(input);
    this.#validate(input);
    this.input = input;
  }

  #validate(input) {
    this.checkEmpty(input);
    const numInput = Number(input);
    this.checkValidChar(numInput);
    this.checkMinNum(numInput);
    this.checkDivisibleByThousand(numInput);
  }
}

export default PurchaseValidation;

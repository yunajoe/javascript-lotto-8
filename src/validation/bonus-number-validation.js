import { INPUT_ERROR } from '../const/error.js';
import ValidationError from '../error/validation-error.js';

class BonusNumberValidation extends ValidationError {
  #winningNumbers;

  #bonusNumber;

  constructor(input, winningNumbers) {
    super(input);
    this.#winningNumbers = winningNumbers;
    this.#validate(input);
    this.input = input;
  }

  #checkBonusNumberValid(input) {
    if (this.#winningNumbers.includes(input)) {
      throw new Error(INPUT_ERROR.DUPLICATED_BONUS_NUMBER);
    }
  }

  #validate(input) {
    this.checkEmpty(input);
    const numInput = Number(input);
    this.checkValidChar(numInput);
    this.checkNumberRange(numInput);
    this.#checkBonusNumberValid(numInput);
    this.#bonusNumber = numInput;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumberValidation;

import { INPUT_ERROR } from '../const/error.js';
import ValidationError from '../error/validation-error.js';

class BonusNumberValidation extends ValidationError {
  // 외부 주입
  #winningNumbers;

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
  }
}

export default BonusNumberValidation;

import { LottoError } from './const/error.js';
import ValidationError from './error/validation-error.js';

class Lotto extends ValidationError {
  #numbers;

  constructor(numbers) {
    super(numbers);
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  // 메서드 오버라이딩
  #checkArrayLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LottoError.MIN_NUMBER);
    }
  }

  // 메서드 오버라이딩
  checkValidChar(input) {
    if (typeof input !== 'number' || Number.isNaN(input)) {
      throw new Error(LottoError.VALID_CHAR);
    }
  }

  #validate(numbers) {
    this.#checkArrayLength(numbers);
    numbers.forEach((value) => {
      this.checkValidChar(value);
      this.checkNumberRange(value);
    });
    this.checkDuplicatedNumber(numbers);
  }

  /**
   *
   * @param {number[]} winningNumber
   * @param {number} bonusNumber
   */

  // TODO: 추가 기능 구현
  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;

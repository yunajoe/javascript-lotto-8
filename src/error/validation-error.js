import { INPUT_ERROR } from '../const/error.js';
import {
  LOTTO_PRICE,
  LOTTO_TICKET,
  PURCHASE_MAX_AMOUNT,
} from '../const/lotto.js';

class ValidationError extends Error {
  constructor(input) {
    super(input);
    this.input = input;
  }

  checkEmpty(input) {
    if (input.length === 0) {
      throw new Error(INPUT_ERROR.EMPTY_INPUT);
    }
  }

  /**
   *
   * @param {number} input
   */
  checkValidChar(input) {
    if (input !== 0 && !input) {
      throw new Error(INPUT_ERROR.INVALID_CHAR);
    }
  }

  /**
   * @param {number} input
   */

  checkMinNum(input) {
    if (input < LOTTO_PRICE) {
      throw new Error(INPUT_ERROR.MIN_PURCHASE_AMOUNT);
    }
  }

  /**
   *
   * @param {number} input
   */
  checkMaxNum(input) {
    if (input > PURCHASE_MAX_AMOUNT) {
      throw new Error(INPUT_ERROR.MAX_PURCHASE_AMOUNT);
    }
  }

  /**
   *
   * @param {number} input
   */
  checkDivisibleByThousand(input) {
    if (input % LOTTO_PRICE !== 0) {
      throw new Error(INPUT_ERROR.INVALID_DIVISIBLE_AMOUNT);
    }
  }

  /**
   *
   * @param {number} input
   */
  checkNumberRange(input) {
    if (input < LOTTO_TICKET.START || input > LOTTO_TICKET.END) {
      throw new Error(INPUT_ERROR.INVALID_NUMBER_RANGE);
    }
  }

  checkArrayLength(inputArr) {
    if (!Array.isArray(inputArr)) {
      throw new Error(INPUT_ERROR.INVALID_TYPE);
    }

    if (inputArr.length !== LOTTO_TICKET.NUM) {
      throw new Error(INPUT_ERROR.INVALID_TOTAL_LOTTO_NUMBER);
    }
  }

  checkDuplicatedNumber(inputArr) {
    if (!Array.isArray(inputArr)) {
      throw new Error(INPUT_ERROR.INVALID_TYPE);
    }
    const setSize = new Set(inputArr).size;
    if (inputArr.length !== setSize) {
      throw new Error(INPUT_ERROR.DUPLICATED_NUMBER);
    }
  }
}

export default ValidationError;

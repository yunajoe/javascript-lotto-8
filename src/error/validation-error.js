import { LOTTO_PRICE, LOTTO_TICKET } from '../const/lotto.js';

class ValidationError extends Error {
  constructor(input) {
    super(input);
    this.input = input;
  }

  checkEmpty(input) {
    if (input.length === 0) {
      throw new Error('[ERROR] 빈 입력값은 입력할 수 없습니다.');
    }
  }

  checkValidChar(input) {
    if (input !== 0 && !Number(input)) {
      throw new Error('[ERROR] 숫자만 사용해야 합니다.');
    }
  }

  checkMinNum(input) {
    if (input < LOTTO_PRICE) {
      throw new Error('[ERROR] 1000원 미만 값은 입력할 수 없습니다.');
    }
  }

  checkDivisibleByThousand(input) {
    if (input % LOTTO_PRICE !== 0) {
      throw new Error(
        '[ERROR] 1000원으로 나누어 떨어지지 않는 값은 입력할 수 없습니다.'
      );
    }
  }

  checkNumberRange(input) {
    if (input < LOTTO_TICKET.START || input > LOTTO_TICKET.END) {
      throw new Error('[ERROR] 로또 번호는 1 ~45 사이여야 합니다.');
    }
  }

  checkArrayLength(inputArr) {
    if (!Array.isArray(inputArr)) {
      throw new Error('[ERROR] 배열 형태의 값이 아닙니다.');
    }

    if (inputArr.length !== LOTTO_TICKET.NUM) {
      throw new Error('[ERROR] 6개의 숫자를 입력해야 합니다.');
    }
  }

  checkDuplicatedNumber(inputArr) {
    if (!Array.isArray(inputArr)) {
      throw new Error('[ERROR] 배열 형태의 값이 아닙니다.');
    }
    const setSize = new Set(inputArr).size;
    if (inputArr.length !== setSize) {
      throw new Error('[ERROR] 중복된 숫자가 있으면 안됩니다.');
    }
  }
}

export default ValidationError;

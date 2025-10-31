import { LottoError } from './const/error';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LottoError.MIN_NUMBER);
    }
    // 숫자가 아닌 문자가 있는 경우
    const isNotValidChar = numbers.some(
      (value) => value !== 0 && !Number(value)
    );
    if (isNotValidChar) {
      throw new Error(LottoError.VALID_CHAR);
    }

    // 중복된 경우
    const setSize = new Set(numbers).size;
    if (numbers.length !== setSize) {
      throw new Error(LottoError.DUPLICATED_NUMBER);
    }

    // 숫자 범위가 1 ~45 넘는 겨웅
    const isNotValidRange = numbers.some((value) => value > 45 || value < 1);
    if (isNotValidRange) {
      throw new Error('[ERROR] 로또 번호는 1 ~45 사이여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;

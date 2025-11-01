import ValidationError from '../error/validation-error';

class PurchaseValidation extends ValidationError {
  constructor(input) {
    super(input);
    this.#validate(input);
    this.input = input;
  }

  #validate(input) {
    if (input.length === 0) {
      throw new Error('[ERROR] 빈 입력값은 입력할 수 없습니다.');
    }
    const numInput = Number(input);

    if (Number.isNaN(numInput)) {
      throw new Error('[ERROR] 숫자가 아닌 값을 입력할 수 없습니다.');
    }

    if (numInput < 1000) {
      throw new Error('[ERROR] 1000원 미만 값은 입력할 수 없습니다.');
    }

    if (numInput % 1000 !== 0) {
      throw new Error(
        '[ERROR] 1000원으로 나누어 떨이지지 않는 값은 입력할 수 없습니다. '
      );
    }
  }
}

export default PurchaseValidation;

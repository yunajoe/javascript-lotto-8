class ValidationError extends Error {
  constructor(input) {
    super(input);
    this.#readError(input);
  }

  #readError(input) {
    if (input.length === 0) {
      throw new Error('[ERROR] 빈 입력값은 입력할 수 없습니다.');
    }
    const numInput = Number(input);
    if (Number.isNaN(numInput)) {
      throw new Error('[ERROR] 숫자가 아닌 값을 입력할 수 없습니다.');
    }

    if (numInput < 1000) {
      throw new Error('[ERROR] 숫자가 아닌 값을 입력할 수 없습니다.');
    }
  }
}

export default ValidationError;

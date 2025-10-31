class ValidationError extends Error {
  constructor(input) {
    super(input);
    this.#readError(input);
  }

  #readError(input) {
    if (input.length === 0) {
      throw new Error('[ERROR] 빈 입력값은 허용이 안됩니다.');
    }
  }
}

export default ValidationError;

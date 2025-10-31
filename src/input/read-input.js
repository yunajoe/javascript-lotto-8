import { Console } from '@woowacourse/mission-utils';
import ValidationError from '../error/validation-error.js';

class Input {
  // 필드
  // 생성자
  // 메서드

  constructor(message) {
    if (!message) {
      throw new Error('[ERROR] 메시지를 입력해주세요');
    }
    this.message = message;
  }

  async getInputMessage() {
    const input = await Console.readLineAsync(this.message);
    new ValidationError(input.trim());
  }
}

export default Input;

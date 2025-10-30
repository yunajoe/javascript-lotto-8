import { Console } from '@woowacourse/mission-utils';

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
    await Console.readLineAsync(this.message);
  }
}

export default Input;

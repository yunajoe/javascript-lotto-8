import { Console } from '@woowacourse/mission-utils';

class Input {
  constructor(message) {
    if (!message) {
      throw new Error('[ERROR] 메시지를 입력해주세요');
    }
    this.message = message;
  }

  async getInputMessage() {
    const result = await Console.readLineAsync(this.message);
    return result;
  }
}

export default Input;

import { INPUT_MESSAGE } from '../src/const/input';
import Input from '../src/input/read-input';

describe('입력 클래스 테스트', () => {
  test('메세지를 입력하지 않은 경우', () => {
    expect(() => {
      new Input('');
    }).toThrow('[ERROR] 메시지를 입력해주세요');
  });

  test('구입 금액 메세지를 입력한 경우', () => {
    const input = new Input(INPUT_MESSAGE.PURCHASE_AMOUNT);
    expect(input.message).toMatch(/구입금액을 입력해주세요.\n/);
  });
  test('당첨 번호  메세지를 입력한 경우', () => {
    const input = new Input(INPUT_MESSAGE.WINNING_NUMBER);
    expect(input.message).toMatch(/당첨 번호를 입력해 주세요.\n/);
  });
  test('보너스 번호 메세지를 입력한 경우', () => {
    const input = new Input(INPUT_MESSAGE.BONUS_NUMBER);
    expect(input.message).toMatch(/보너스 번호를 입력해 주세요.\n/);
  });
});

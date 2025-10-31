import Input from '../src/input/read-input';

describe('입력 클래스 테스트', () => {
  test('메세지를 입력하지 않은 경우', () => {
    expect(() => {
      new Input('');
    }).toThrow('[ERROR] 메시지를 입력해주세요');
  });
});

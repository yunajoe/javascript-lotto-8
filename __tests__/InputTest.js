import Input from '../src/input/read-input';

describe('입력 클래스 테스트', () => {
  test('빈 문자열인 경우예외가 발생한다.', () => {
    expect(() => {
      new Input('');
    }).toThrow('[ERROR] 메시지를 입력해주세요');
  });
});

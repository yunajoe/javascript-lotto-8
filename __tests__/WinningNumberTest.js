import ValidationError from '../src/error/validation-error';

describe('당첨번호 입력', () => {
  test.each([[''], ['          ']])('빈 문자열을 입력한 경우 %s', (input) => {
    expect(() => {
      new ValidationError(input.trim());
    }).toThrow('[ERROR] 빈 입력값은 입력할 수 없습니다.');
  });

  test.each([['abc'], ['@@@']])(
    '쉼표 구분자(,)가 아닌 다른 구분자로 번호를 구분한 경우 %s',
    (input) => {
      expect(() => {
        new ValidationError(input);
      }).toThrow('[ERROR]');
    }
  );
  test.each([['abc'], ['@@@']])(
    '입력한 값이 숫자가 아닌 다른 타입의 값이 있을 경우 %s',
    (input) => {}
  );
  test.each([['abc'], ['@@@']])(
    '6개의 숫자를 입력하지 않았을 경우 %s',
    (input) => {}
  );
  test.each([['abc'], ['@@@']])(
    '입력한 숫자에서 중복된 숫자가 있는 경우 %s',
    (input) => {}
  );
  test.each([['abc'], ['@@@']])(
    '입력한 숫자가 1~45 범위를 벗어난 경우 %s',
    (input) => {}
  );
});

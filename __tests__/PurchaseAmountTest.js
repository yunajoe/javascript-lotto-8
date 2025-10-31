import ValidationError from '../src/error/validation-error';

describe('로또 구입 금액 입력', () => {
  test.each([[''], ['      ']])('빈 문자열을 입력한 경우 %s', (input) => {
    expect(() => {
      new ValidationError(input);
    }).toThrow('[ERROR] 빈 입력값은 입력할 수 없습니다.');
  });

  test.each([['abc'], ['@@@']])('숫자가 아닌 값을 입력한 경우 %s', (input) => {
    expect(() => {
      new ValidationError(input);
    }).toThrow('[ERROR] 숫자가 아닌 값을 입력할 수 없습니다.');
  });

  test.each([[0], [500], [999]])(
    '1000원 미만의 값을 입력한 경우 %s',
    (input) => {
      expect(() => {
        new ValidationError(input);
      }).toThrow('[ERROR] 1000원 미만 값은 입력할 수 없습니다.');
    }
  );

  test.each([[0], [500], [999]])(
    '1000원 미만의 값을 입력한 경우 %s',
    (input) => {
      expect(() => {
        new ValidationError(input);
      }).toThrow('[ERROR] 1000원 미만 값은 입력할 수 없습니다.');
    }
  );
});

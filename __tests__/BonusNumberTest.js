import BonusNumberValidation from '../src/validation/bonus-number-validation';

// npx jest BonusNumber
describe('보너스 번호 입력', () => {
  test.each([[''], ['          ']])('빈 문자열을 입력한 경우 %s', (input) => {
    expect(() => {
      new BonusNumberValidation(input.trim());
    }).toThrow('[ERROR] 빈 입력값은 입력할 수 없습니다.');
  });

  test.each([['null'], ['false'], ['undefined'], ['TEST']])(
    '보너스 번호로 숫자가 아닌 값이 있으면 예외가 발생한다. %s',
    (input) => {
      expect(() => {
        new BonusNumberValidation(input);
      }).toThrow('[ERROR] 숫자만 사용해야 합니다.');
    }
  );
  test.each([['0'], ['46'], ['100']])(
    '입력한 숫자가 1~45 범위를 벗어난 경우 %s',
    (input) => {
      expect(() => {
        new BonusNumberValidation(input);
      }).toThrow('[ERROR] 로또 번호는 1 ~45 사이여야 합니다.');
    }
  );
});

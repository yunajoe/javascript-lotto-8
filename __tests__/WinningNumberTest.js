import WinningNumberValidation from '../src/validation/winning-number-validation';

describe('당첨번호 입력', () => {
  describe('정상 처리', () => {
    test.each([
      ['1,2,3,4,5,6'],
      ['7, 8, 9, 10, 11, 12'],
      ['40, 41, 42, 43, 44, 45'],
    ])('정상적인 당첨 번호를 입력한 경우 %s', (input) => {
      expect(() => {
        new WinningNumberValidation(input);
      }).not.toThrow();
    });
  });
  describe('예외 처리', () => {
    test.each([[''], ['          ']])('빈 문자열을 입력한 경우 %s', (input) => {
      expect(() => {
        new WinningNumberValidation(input.trim());
      }).toThrow('[ERROR] 빈 입력값은 입력할 수 없습니다.');
    });

    test.each([
      ['1,2,,4,5,6'],
      ['1,2, ,4,5,6'],
      ['1,2,3,4,5,6,7'],
      ['2, 3, 4, 5, 6, 43, 45'],
    ])('입력한 값이 6개가 아니면은 예외가 발생한다. %s', (input) => {
      expect(() => {
        new WinningNumberValidation(input);
      }).toThrow('[ERROR] 6개의 숫자를 입력해야 합니다.');
    });

    test.each([
      ['@,2,3,4,5,6'],
      ['null, 3, 4, 5, 6, 43'],
      ['false, 3, 4, 5, 6, 43'],
      ['undefined, 3, 4, 5, 6, 43'],
    ])('로또 번호가 숫자가 아닌 값이 있으면 예외가 발생한다. %s', (input) => {
      expect(() => {
        new WinningNumberValidation(input);
      }).toThrow('[ERROR] 숫자만 사용해야 합니다.');
    });

    test.each([['-1,2,3,4,5,6'], ['0,1,2,3,4,5'], ['1,2,3,4,5,100']])(
      '입력한 숫자가 1~45 범위를 벗어난 경우 %s',
      (input) => {
        expect(() => {
          new WinningNumberValidation(input);
        }).toThrow('[ERROR] 로또 번호는 1 ~45 사이여야 합니다.');
      }
    );

    test.each([['1,1,2,3,4,5'], ['1,2,3,4,5,1']])(
      '입력한 숫자가 중복된 경우가 있는 경우 %s',
      (input) => {
        expect(() => {
          new WinningNumberValidation(input);
        }).toThrow('[ERROR] 중복된 숫자가 있으면 안됩니다.');
      }
    );
  });
});

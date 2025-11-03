import PurchaseValidation from '../src/validation/purchase-amount-validation';

describe('로또 구입 금액 입력', () => {
  describe('정상 처리', () => {
    test.each([[1000], [2000], [5000]])(
      '1000원 이상이고 1000으로 나누어 떨어지는 정상 입력 %s',
      (input) => {
        expect(() => {
          new PurchaseValidation(input);
        }).not.toThrow();
      }
    );
  });
  describe('예외 처리', () => {
    test.each([[''], ['          ']])('빈 문자열을 입력한 경우 %s', (input) => {
      expect(() => {
        new PurchaseValidation(input.trim());
      }).toThrow('[ERROR] 빈 입력값은 입력할 수 없습니다.');
    });

    test.each([['abc'], ['@@@']])(
      '숫자가 아닌 값을 입력한 경우 %s',
      (input) => {
        expect(() => {
          new PurchaseValidation(input);
        }).toThrow('[ERROR] 숫자만 사용해야 합니다.');
      }
    );

    test.each([[0], [500], [999]])(
      '1000원 미만의 값을 입력한 경우 %s',
      (input) => {
        expect(() => {
          new PurchaseValidation(input);
        }).toThrow('[ERROR] 1000원 미만 값은 입력할 수 없습니다.');
      }
    );

    test.each([[1100000], [2000000], [3000000]])(
      '1000000원 초과의 값을 입력한 경우 %s',
      (input) => {
        expect(() => {
          new PurchaseValidation(input);
        }).toThrow('[ERROR] 1000000원 초과 값은 입력할 수 없습니다.');
      }
    );

    test.each([[1100], [1400], [3200]])(
      '1000원 으로 나누어 떨어지지 않는 경우 %s',
      (input) => {
        expect(() => {
          new PurchaseValidation(input);
        }).toThrow(
          '[ERROR] 1000원으로 나누어 떨어지지 않는 값은 입력할 수 없습니다.'
        );
      }
    );
  });
});

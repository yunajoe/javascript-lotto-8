import Lotto from '../src/Lotto';

// npx jest Lotto

describe('로또 클래스 테스트', () => {
  test.each([[[1, 2, 3, 4, 5, 6, 7]], [[1, 2, 3, 4, 5, 6, 45]]])(
    '입력한 값이 6개가 아니면은 예외가 발생한다. %s',
    (input) => {
      expect(() => {
        new Lotto(input);
      }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  );

  test.each([
    [[1, 2, '@', 4, 5, 6]],
    [[null, 2, 3, 4, 5, 6]],
    [[false, 2, 3, 4, 5, 6]],
    [[undefined, 2, 3, 4, 5, 6]],
  ])('로또 번호가 숫자가 아닌 값이 있으면 예외가 발생한다. %s', (input) => {
    expect(() => {
      new Lotto(input);
    }).toThrow('[ERROR] 숫자만 사용해야 합니다.');
  });

  test.each([
    [[-1, 2, 3, 4, 5, 6]],
    [[0, 1, 2, 3, 4, 5]],
    [[1, 2, 3, 4, 5, 46]],
  ])('입력한 숫자가 1~45 범위를 벗어난 경우 %s', (input) => {
    expect(() => {
      new Lotto(input);
    }).toThrow('[ERROR] 로또 번호는 1 ~45 사이여야 합니다.');
  });

  test.each([[[1, 2, 3, 4, 4, 6]], [[1, 2, 3, 4, 6, 6]]])(
    '입력한 숫자가 중복된 경우가 있는 경우 %s',
    (input) => {
      expect(() => {
        new Lotto(input);
      }).toThrow('[ERROR] 중복된 숫자가 있으면 안됩니다.');
    }
  );
});

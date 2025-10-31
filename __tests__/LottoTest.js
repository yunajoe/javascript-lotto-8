import Lotto from '../src/Lotto';

// npx jest Lotto

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 중복된 숫자가 있으면 안됩니다.');
  });

  test.each([
    [['', 2, 3, 4, 5, 6]],
    [['테스트', 2, 3, 4, 5, 6]],
    [[null, 2, 3, 4, 5, 6]],
  ])('로또 번호가 숫자가 아닌 값이 있으면 예외가 발생한다. %s', (input) => {
    expect(() => {
      new Lotto(input);
    }).toThrow('[ERROR] 숫자만 사용해야 합니다.');
  });

  test.each([
    [[-1, 2, 3, 4, 5, 6]],
    [[0, 2, 3, 4, 5, 6]],
    [[1, 2, 3, 4, 46, 6]],
  ])('로또 번호가 1~45 사이가 아니면 예외가 발생한다. %s', (input) => {
    expect(() => {
      new Lotto(input);
    }).toThrow('[ERROR] 로또 번호는 1 ~45 사이여야 합니다.');
  });
});

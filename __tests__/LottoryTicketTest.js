import LotteryTicket from '../src/lotto/lottory-ticket';

describe('Lottery Ticket 클래스 테스트', () => {
  test('로또 수량 argument를 넘겨주지 않은 경우', () => {
    expect(() => {
      new LotteryTicket();
    }).toThrow('[ERROR]');
  });

  test.each([[1], [2]])('로또 수량 만큼의 번호를 출력할때 %s', () => {
    expect(() => {
      new LotteryTicket(1);
    });
  });
});

import { Console } from '@woowacourse/mission-utils';
import { LottoTicketError } from '../src/const/error';
import LotteryTicket from '../src/lotto/lottery-ticket';
// npx jest LotteryTicket
describe('Lottery Ticket 클래스 테스트', () => {
  let printSpy;

  beforeEach(() => {
    printSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});
  });

  afterEach(() => {
    printSpy.mockRestore();
  });

  test('로또 구입 가격을 넘겨주지 않은 경우', () => {
    expect(() => {
      new LotteryTicket();
    }).toThrow(LottoTicketError.MIN_AMOUNT);
  });

  test('로또 구입 가격을 넘겨주었을 경우', () => {
    new LotteryTicket(8000);
    expect(printSpy.mock.calls[0]).toContain('8개를 구매하였습니다.');
    const ticketPrints = printSpy.mock.calls.slice(1);
    ticketPrints.forEach((ticketArr) => {
      const len = ticketArr.flat().length;
      expect(len).toEqual(6);
    });
  });
});

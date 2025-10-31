import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_PRICE, LOTTO_TICKET } from '../const/lotto.js';

class LotteryTicket {
  #amount;

  constructor(amount) {
    if (!amount) {
      throw new Error('로또 티켓은 최소 1장 이상이여야 합니다.');
    }
    this.#amount = amount;
    this.#run();
  }

  #calculateTheNumberOfLotteryTickets(amount) {
    return amount / LOTTO_PRICE;
  }

  #printLotteryTickets(number) {
    Array.from({ length: number }).forEach(() => {
      const lottoTicketArr = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_TICKET.START,
        LOTTO_TICKET.END,
        LOTTO_TICKET.NUM
      );
      Console.print(lottoTicketArr);
    });
  }

  #run() {
    const theNumberOfTicket = this.#calculateTheNumberOfLotteryTickets(
      this.#amount
    );
    Console.print(`${theNumberOfTicket}개를 구매하였습니다.`);
    this.#printLotteryTickets(theNumberOfTicket);
  }
}

export default LotteryTicket;

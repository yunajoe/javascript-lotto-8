import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { LottoTicketError } from '../const/error.js';
import { LOTTO_PRICE, LOTTO_TICKET } from '../const/lotto.js';
import Lotto from '../Lotto.js';

class LotteryTicket {
  #amount;

  #lottoTickets = [];

  constructor(amount) {
    if (!amount) {
      throw new Error(LottoTicketError.MIN_PURCHASE_AMOUNT);
    }
    this.#amount = amount;
    this.#run();
  }

  #calculateTheNumberOfLotteryTickets(amount) {
    const theNumberOfTicket = amount / LOTTO_PRICE;
    Console.print(`${theNumberOfTicket}개를 구매하였습니다.`);
    return theNumberOfTicket;
  }

  #printLotteryTickets(number) {
    Array.from({ length: number }).forEach(() => {
      const lottoTicketArr = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_TICKET.START,
        LOTTO_TICKET.END,
        LOTTO_TICKET.NUM
      );
      const lotto = new Lotto(lottoTicketArr);
      this.#lottoTickets.push(lotto.getNumbers());

      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  #run() {
    const theNumberOfTicket = this.#calculateTheNumberOfLotteryTickets(
      this.#amount
    );
    this.#printLotteryTickets(theNumberOfTicket);
  }

  getLottoTickets() {
    return [...this.#lottoTickets];
  }
}

export default LotteryTicket;

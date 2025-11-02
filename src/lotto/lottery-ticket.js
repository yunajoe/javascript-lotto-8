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

      // Console.print(lottoTicketArr);

      // Lotto validation 검증 통과가 되면은 lottoTickets에 넣기
      const lotto = new Lotto(lottoTicketArr);
      this.#lottoTickets.push(lotto);
      // Console.print(`[${lotto.getNumbers().join(', ')}]`);
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  getLottoTickets() {
    return [...this.#lottoTickets];
  }

  #run() {
    const theNumberOfTicket = this.#calculateTheNumberOfLotteryTickets(
      this.#amount
    );
    this.#printLotteryTickets(theNumberOfTicket);
  }
}

export default LotteryTicket;

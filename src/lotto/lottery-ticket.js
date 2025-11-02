import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_ERROR } from '../const/error.js';
import { LOTTO_PRICE, LOTTO_TICKET } from '../const/lotto.js';
import Lotto from '../Lotto.js';

class LotteryTicket {
  #amount;

  #lottoTickets = [];

  constructor(amount) {
    if (!amount) {
      throw new Error(INPUT_ERROR.EMPTY_INPUT);
    }
    this.#amount = amount;
    this.#run();
  }

  #sortAscendingNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  #calculateTheNumberOfLotteryTickets(amount) {
    const theNumberOfTicket = amount / LOTTO_PRICE;
    Console.print(`${theNumberOfTicket}개를 구매했습니다.`);
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
      const ascendingNumbers = this.#sortAscendingNumbers(lotto.getNumbers());
      this.#lottoTickets.push(ascendingNumbers);

      Console.print(`[${ascendingNumbers.join(', ')}]`);
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

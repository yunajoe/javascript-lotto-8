import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_TICKET } from '../const/lotto.js';

class LotteryTicket {
  #number;

  constructor(number) {
    if (!number) {
      throw new Error('로또 티켓은 최소 1장 이상이여야 합니다.');
    }
    this.#number = number;
    this.#printLotteryTickets(number);
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
}

export default LotteryTicket;

import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './const/input.js';
import { LOTTO_PRICE } from './const/lotto.js';
import ValidationError from './error/validation-error.js';
import Input from './input/read-input.js';
import LotteryTicket from './lotto/lottory-ticket.js';

class App {
  async run() {
    const calculateLotteryTicket = (amount) => {
      return amount / LOTTO_PRICE;
    };

    try {
      const purchaseAmountInput = new Input(INPUT_MESSAGE.PURCHASE_AMOUNT);
      const input = await purchaseAmountInput.getInputMessage();
      new ValidationError(input.trim());
      console.log('\n');
      const aNumberOfTicket = calculateLotteryTicket(Number(input));
      Console.print(`${aNumberOfTicket}개를 구매하였습니다.`);
      new LotteryTicket(aNumberOfTicket);
    } catch (error) {
      throw error;
    }
  }
}

export default App;

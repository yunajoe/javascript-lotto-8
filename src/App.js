import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './const/input.js';
import ValidationError from './error/validation-error.js';
import Input from './input/read-input.js';
import LotteryTicket from './lotto/lottory-ticket.js';

class App {
  async run() {
    try {
      const purchaseAmountInput = new Input(INPUT_MESSAGE.PURCHASE_AMOUNT);
      const purchaseAmount = await purchaseAmountInput.getInputMessage();
      new ValidationError(purchaseAmount.trim());
      Console.print('\n');
      new LotteryTicket(Number(purchaseAmount));
    } catch (error) {
      throw error;
    }
  }
}

export default App;

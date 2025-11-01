import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './const/input.js';
import Input from './input/read-input.js';
import LotteryTicket from './lotto/lottery-ticket.js';
import PurchaseValidation from './validation/purchase-amount-validation.js';

class App {
  async run() {
    try {
      const purchaseAmountInput = new Input(INPUT_MESSAGE.PURCHASE_AMOUNT);
      const purchaseAmount = await purchaseAmountInput.getInputMessage();
      // new ValidationError(purchaseAmount.trim());
      new PurchaseValidation(purchaseAmount.trim());
      Console.print('\n');
      new LotteryTicket(Number(purchaseAmount));
      Console.print('\n');
      const winningNumberInput = new Input(INPUT_MESSAGE.WINNING_NUMBER);
      const winningNumber = await winningNumberInput.getInputMessage();
      console.log('winningNumber', winningNumber);
    } catch (error) {
      throw error;
    }
  }
}

export default App;

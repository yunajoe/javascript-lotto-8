import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './const/input.js';
import Input from './input/read-input.js';
import LotteryResult from './lotto/lottery-result.js';
import LotteryTicket from './lotto/lottery-ticket.js';
import BonusNumberValidation from './validation/bonus-number-validation.js';
import PurchaseValidation from './validation/purchase-amount-validation.js';
import WinningNumberValidation from './validation/winning-number-validation.js';

class App {
  async run() {
    try {
      const purchaseAmountInput = new Input(INPUT_MESSAGE.PURCHASE_AMOUNT);
      const purchaseAmount = await purchaseAmountInput.getInputMessage();
      new PurchaseValidation(purchaseAmount.trim());
      Console.print('\n');
      const validLottoTickets = new LotteryTicket(
        Number(purchaseAmount.trim())
      ).getLottoTickets();
      Console.print('\n');
      const winningNumberInput = new Input(INPUT_MESSAGE.WINNING_NUMBER);
      const winningNumber = await winningNumberInput.getInputMessage();
      const validWinningNumber = new WinningNumberValidation(
        winningNumber.trim()
      ).getWinningNumber();
      Console.print('\n');
      const bonusNumberInput = new Input(INPUT_MESSAGE.BONUS_NUMBER);
      const bonusNumber = await bonusNumberInput.getInputMessage();
      const validBonusNumber = new BonusNumberValidation(
        bonusNumber.trim(),
        validWinningNumber
      ).getBonusNumber();
      Console.print('\n');
      // 로또 계산
      new LotteryResult(
        validWinningNumber,
        validBonusNumber,
        validLottoTickets
      );
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;

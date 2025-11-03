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
      const purchaseAmount = await this.getPurchaseAmount();
      const lottoTickets = this.generateLottoTickets(purchaseAmount);

      const winningNumber = await this.getWinningNumber();
      const bonusNumber = await this.getBonusNumber(winningNumber);

      new LotteryResult(winningNumber, bonusNumber, lottoTickets);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async getPurchaseAmount() {
    const input = new Input(INPUT_MESSAGE.PURCHASE_AMOUNT);
    const amount = (await input.getInputMessage()).trim();
    new PurchaseValidation(amount);
    Console.print('\n');
    return Number(amount);
  }

  generateLottoTickets(purchaseAmount) {
    const tickets = new LotteryTicket(purchaseAmount).getLottoTickets();
    Console.print('\n');
    return tickets;
  }

  async getWinningNumber() {
    const input = new Input(INPUT_MESSAGE.WINNING_NUMBER);
    const numbers = (await input.getInputMessage()).trim();
    const validNumbers = new WinningNumberValidation(
      numbers
    ).getWinningNumber();
    Console.print('\n');
    return validNumbers;
  }

  async getBonusNumber(winningNumber) {
    const input = new Input(INPUT_MESSAGE.BONUS_NUMBER);
    const number = (await input.getInputMessage()).trim();
    const validNumber = new BonusNumberValidation(
      number,
      winningNumber
    ).getBonusNumber();
    Console.print('\n');
    return validNumber;
  }
}

export default App;

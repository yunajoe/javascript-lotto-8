import { INPUT_MESSAGE } from './const/input.js';
import ValidationError from './error/validation-error.js';
import Input from './input/read-input.js';

class App {
  async run() {
    try {
      const purchaseAmountInput = new Input(INPUT_MESSAGE.PURCHASE_AMOUNT);
      const input = await purchaseAmountInput.getInputMessage();
      new ValidationError(input.trim());
    } catch (error) {
      throw error;
    }
  }
}

export default App;

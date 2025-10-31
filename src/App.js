import { INPUT_MESSAGE } from './const/input.js';
import Input from './input/read-input.js';

class App {
  async run() {
    const purchaseAmountInput = new Input(INPUT_MESSAGE.PURCHASE_AMOUNT);
    purchaseAmountInput.getInputMessage();
  }
}

export default App;

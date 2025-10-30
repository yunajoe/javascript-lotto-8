import Input from './input/read-input.js';

class App {
  async run() {
    const purchaseAmountInput = new Input('구입금액을 입력해주세요\n');
    purchaseAmountInput.getInputMessage();
  }
}

export default App;

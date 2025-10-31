class LotteryTicket {
  #number;

  constructor(number) {
    if (!number) {
      throw new Error('');
    }
    this.#number = number;
  }
}

export default LotteryTicket;

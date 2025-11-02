class LotteryResult {
  constructor(winningNumber, bonusNumber) {
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
    this.#run();
  }

  #calculateLottoWinner() {
    // const lottoTickets = new LotteryTicket().getLottoTickets();
    // console.log('로또 티켓', lottoTickets);
  }

  printLotteryResult() {
    Console.print('당첨통계');
    Console.print('---');
  }

  #run() {
    this.#calculateLottoWinner();
  }
}

export default LotteryResult;

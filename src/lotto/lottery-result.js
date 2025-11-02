import { Console } from '@woowacourse/mission-utils';

class LotteryResult {
  #winningNumbers;

  #bonusNumber;

  #validLottoTickets;

  constructor(winningNumbers, bonusNumber, validLottoTickets) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#validLottoTickets = validLottoTickets;
    this.#run();
  }

  #calculateLottoWinner() {
    return this.#validLottoTickets.reduce(
      (acc, item) => {
        let cnt = 0;
        item.forEach((num) => {
          if (this.#winningNumbers.includes(num)) {
            cnt++;
          }
        });
        if (cnt === 5 && item.includes(this.#bonusNumber)) {
          acc['5Bonus'] += 1;
        } else {
          acc[cnt] += 1;
        }

        cnt = 0;
        return acc;
      },
      {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        '5Bonus': 0,
        6: 0,
      }
    );
  }

  printLotteryResult(result) {
    Console.print('당첨 통계');
    Console.print('---');
    for (const [key, value] of Object.entries(result)) {
      if (key === '3') {
        Console.print(`3개 일치 (5,000원) - ${value}개`);
      }
      if (key === '4') {
        Console.print(`4개 일치 (50,000원) - ${value}개`);
      }
      if (key === '5') {
        Console.print(`5개 일치 (1,500,000원) - ${value}개`);
      }
      if (key === '5Bonus') {
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${value}개`);
      }
      if (key === '6') {
        Console.print(`6개 일치 (2,000,000,000원) - ${value}개`);
      }
    }
  }

  #run() {
    const result = this.#calculateLottoWinner();
    this.printLotteryResult(result);
  }
}

export default LotteryResult;

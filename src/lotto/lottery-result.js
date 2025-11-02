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
    const initialResult = { 3: 0, 4: 0, 5: 0, '5Bonus': 0, 6: 0 };

    return this.#validLottoTickets.reduce((acc, item) => {
      let cnt = 0;
      item.forEach((num) => {
        if (this.#winningNumbers.includes(num)) {
          cnt++;
        }
      });

      if (cnt === 5 && item.includes(this.#bonusNumber)) {
        acc['5Bonus'] += 1;
      } else if (cnt >= 3) {
        acc[cnt] += 1;
      }

      cnt = 0;
      return acc;
    }, initialResult);
  }

  printLotteryResult(result) {
    console.log('result ===>', result);
    Console.print('당첨 통계');
    Console.print('---');
    const PRIZE_RULES = [
      { key: 3, label: '3개 일치 (5,000원)' },
      { key: 4, label: '4개 일치 (50,000원)' },
      { key: 5, label: '5개 일치 (1,500,000원)' },
      { key: '5Bonus', label: '5개 일치, 보너스 볼 일치 (30,000,000원)' },
      { key: 6, label: '6개 일치 (2,000,000,000원)' },
    ];

    PRIZE_RULES.forEach(({ key, label }) => {
      const count = result[key] ?? 0;
      Console.print(`${label} - ${count}개`);
    });
  }

  #run() {
    const result = this.#calculateLottoWinner();
    this.printLotteryResult(result);
  }
}

export default LotteryResult;

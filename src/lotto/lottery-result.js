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
    const initialResult = {
      3: { count: 0, amount: 5000 },
      4: { count: 0, amount: 50000 },
      5: { count: 0, amount: 1500000 },
      '5Bonus': { count: 0, amount: 30000000 },
      6: { count: 0, amount: 2000000000 },
    };

    return this.#validLottoTickets.reduce((acc, item) => {
      let cnt = 0;
      item.forEach((num) => {
        if (this.#winningNumbers.includes(num)) {
          cnt++;
        }
      });

      if (cnt === 5 && item.includes(this.#bonusNumber)) {
        acc['5Bonus'].count += 1;
      } else if (cnt >= 3) {
        acc[cnt].count += 1;
      }

      cnt = 0;
      return acc;
    }, initialResult);
  }

  #calculateProfitRate(result) {
    const pay = this.#validLottoTickets.length * 1000;
    console.log('pay', pay, result);
    const profitSum = Object.entries(result).reduce((acc, [key, value]) => {
      const { count, amount } = value;
      acc += count * amount;
      return acc;
    }, 0);
    const profitRate = (profitSum / pay) * 100;
    const rounded = Math.round(profitRate * 10) / 10;
    return rounded;
  }

  printLotteryResult(result, result2) {
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
      const count = result[key].count ?? 0;
      Console.print(`${label} - ${count}개`);
    });

    Console.print(`총 수익률은 ${result2}%입니다.`);
  }

  #run() {
    const result = this.#calculateLottoWinner();
    const result2 = this.#calculateProfitRate(result);
    this.printLotteryResult(result, result2);
  }
}

export default LotteryResult;

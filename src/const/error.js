export const InputErrorMessage = {};

export const LottoError = {
  MIN_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  VALID_CHAR: '[ERROR] 숫자만 사용해야 합니다.',
  DUPLICATED_NUMBER: '[ERROR] 중복된 숫자가 있으면 안됩니다.',
};

export const LottoTicketError = {
  MIN_AMOUNT: '[ERROR] 로또 티켓은 최소 1장 이상이여야 합니다.',
};

export const WinningNumberError = {
  EMPTY_INPUT: '[ERROR] 빈 입력값은 입력할 수 없습니다.',
  INVALID_CHAR: '[ERROR] 숫자만 사용해야 합니다.',
  INVALID_NUMBER_RANGE: '[ERROR] 로또 번호는 1 ~45 사이여야 합니다.',
  INVALID_TOTAL_LOTTO_NUMBER: '[ERROR] 6개의 숫자를 입력해야 합니다.',
};

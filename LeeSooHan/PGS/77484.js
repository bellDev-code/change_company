// [최고, 최저];

function reward(number) {
  switch (number) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}

function solution(lottos, win_nums) {
  const withoutZeroNumber = lottos.filter((number) => number !== 0);

  const sameNumberCount = win_nums.filter((item) =>
    withoutZeroNumber.includes(item)
  );

  //  최고: 같은 숫자 + 0개수
  //  최저: 같은 숫자
  return [
    reward(sameNumberCount.length + lottos.length - withoutZeroNumber.length),
    reward(sameNumberCount.length),
  ];
}

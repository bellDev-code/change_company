// 문제: 거스름돈 계산
// 당신은 가게에서 일하고 있습니다. 고객이 물건을 구입한 후 거스름돈을 반환해야 합니다. 가게에는 500원, 100원, 50원, 10원 동전이 무한히 있습니다. 당신의 목표는 거스름돈을 동전의 최소 개수로 반환하는 것입니다.

// 예시:

// 거스름돈이 1260원이면, 500원 2개, 100원 2개, 50원 1개, 10원 1개로 총 6개의 동전이 필요합니다.

function minCoins(change: number): number {
  let count = 0;
  const coins = [500, 100, 50, 10];

  for (let coin of coins) {
    count += Math.floor(change / coin);
    change %= coin;
  }

  return count;
}

console.log(minCoins(1260)); // 출력: 6

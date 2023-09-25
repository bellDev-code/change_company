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

//  물어 볼수 있는 꼬리 질문. for of와 in 의 차이점은 무엇인가요?
//  for of는 배열의 요소를 순회할 때 사용하고, in은 객체의 속성을 순회할 때 사용합니다.
// for...in 예시

// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//   console.log(key);  // 출력: 'a', 'b', 'c'
// }

// for...of 예시
// for...of는 객체의 속성을 직접 순회할 수 없습니다. 하지만 객체의 키나 값 배열을 만들어 이를 순회할 수는 있습니다.

// const obj = { a: 1, b: 2, c: 3 };
// for (const key of Object.keys(obj)) {
//   console.log(key);  // 출력: 'a', 'b', 'c'
// }

// 위 코드의 시간복잡도는 무엇인가요?
// O(n)입니다. n은 거스름돈의 금액입니다.

// 위 코드의 공간복잡도는 무엇인가요?
// O(1)입니다. coins 배열의 크기가 고정되어 있기 때문입니다.

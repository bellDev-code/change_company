// # 블랙잭 - 모든 경우의 수 구하기

// # 카지노에서 제일 인기 있는 게임 블랙잭의 규칙은 상당히 쉽다. 카드의 합이 21을 넘지 않는 한도 내에서,
// # 카드의 합을 최대한 크게 만드는 게임이다. 블랙잭은 카지노마다 다양한 규정이 있다.
// # 한국 최고의 블랙잭 고수 김정인은 새로운 블랙잭 규칙을 만들어 상근, 창영이와 게임하려고 한다.
// # 김정인 버전의 블랙잭에서 각 카드에는 양의 정수가 쓰여 있다. 그 다음, 딜러는 N장의 카드를 모두 숫자가 보이도록 바닥에 놓는다.
// # 그런 후에 딜러는 숫자 M을 크게 외친다.
// # 이제 플레이어는 제한된 시간 안에 N장의 카드 중에서 3장의 카드를 골라야 한다. 블랙잭 변형 게임이기 때문에,
// # 플레이어가 고른 카드의 합은 M을 넘지 않으면서 M과 최대한 가깝게 만들어야 한다.
// # N장의 카드에 써져 있는 숫자가 주어졌을 때, M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력하시오.

// N(3 ≤ N ≤ 100)과 M(10 ≤ M ≤ 300,000)

// 문제푸는데 1시간 걸림
// 최초 코드는 아래와 같다. 3중 for문을 돌려서 해당 값을 찾는다.시간 복잡도는 o(n^3) 그리고 공간 복잡도는 o(n)이다.
const makeUnboundedRandomList = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    const number = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
    result.push(number);
  }
  return result;
};

const getApproximationNumber = (n, m) => {
  let result = 0;

  const numList = makeUnboundedRandomList(n);
  // 시간 복잡도는 nlogn 가장 큰수들이 앞으로 온다면 최대값을 구하기 쉽다고 생각.
  numList.sort((a, b) => b - a);

  let firstNumber = numList[0];
  let secondNumber = numList[1];
  let thirdNumber = numList[2];

  // 예외 케이스 제거
  if (firstNumber > m || secondNumber > m || thirdNumber > m) return null;
  if (firstNumber + secondNumber > m) return null;
  if (firstNumber + secondNumber + thirdNumber > m) return null;

  // 모든 포문을 다 한번씩 돌아야 함. 빅오 n^3임.

  for (let i = 0; i < numList.length; i++) {
    for (let j = i + 1; j < numList.length; j++) {
      for (let k = j + 1; k < numList.length; k++) {
        // i가 배열의 길이보다 커진다면 return을 해야함. 숫자 3개를 골라야하기 때문에 전체 배열에서
        const sum = numList[i] + numList[j] + numList[k];
        if (sum <= m) {
          result = sum;
          return result;
        }
      }
    }
  }

  return result;
};

// 아래는 이진트리를 이용한 방법이다.
// 마지막 수를 이진트리를 이용해 구하는 방법
// const binarySearchClosest = (array, target) => {
//   let left = 0;
//   let right = array.length - 1;
//   let closest = -1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     closest = array[mid];
//     if (array[mid] === target) {
//       return array[mid];
//     } else if (array[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return closest;
// };

// const getApproximationNumber = (n, m) => {
//   let closestSum = 0;

//   const numList = makeUnboundedRandomList(n);
//   numList.sort((a, b) => a - b);

//   for (let i = 0; i < numList.length; i++) {
//     for (let j = i + 1; j < numList.length; j++) {
//       const remaining = m - (numList[i] + numList[j]);
//       const found = binarySearchClosest(numList.slice(j + 1), remaining);
//       if (found !== -1) {
//         const currentSum = numList[i] + numList[j] + found;
//         if (currentSum <= m) {
//           closestSum = Math.max(closestSum, currentSum);
//         }
//       }
//     }
//   }
//   return closestSum;
// };

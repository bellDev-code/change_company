// 문제 설명

// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다.
// 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가
// 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

// 제한 사항

// - 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
// - 작업 진도는 100 미만의 자연수입니다.
// - 작업 속도는 100 이하의 자연수입니다.
// - 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

// 1번 배열을 순회할때마다 100%가 되었다면 stack에 쌓는다. lenght만큼 배포한다. ->숫자 계산 하고 배열에 push
// 배열을 순회할때마다 또 stack에 찾는다 이때 이미 100이라면 제외

// 남은 진도를 구하는 함수를 만든다.

// 남은 진도의 값을 스피드로 나눈다.진도가 3%남았고 스피드가 1%라면 3 = 1 * x   => x= 3/1

// const deploymentChecker = (progresses: number[], speeds: []) => {
//   const result: number[] = [];

//   for (let i = 0; i < progresses.length; i++) {
//     // 작업이 완료 되었는지 확인.
//     const stack = [];
//     if (progresses[i] + speeds[i] >= 100) {
//       stack.push();
//       result.push(stack.length);
//     }
//   }

//   return result;
// };

// 위와 같은 사고를 하다가 내가 갖고 있는 지식으로는 풀수 없다고 판단. 스택과 큐의 자료구조를 찾아봄.
//  이미 머리로 알고 있고 pop unshift shift push등등의 method도 다 알고있음. 하지만 그래도 어떻게 코드를 짜야하는지 모르겠음.
// 종호의 정답을 스윽 봄. while문을 써야 진도율이 100이 될때까지 올라가는구나! 라는 것을 깨달음. 30분 만에 다시 시도

// const deploymentChecker = (progresses: number[], speeds: []) => {
//   const result: number[] = [];
//   let i = 0;
//   let isFinished = progresses[i] + speeds[i] >= 100;

//   do {
//     i = i + 1;
//     if (isFinished) {
//       progresses.
//       result.push()
//     }
//   } while (isFinished);

//   return result;
// };

// 15분을 더 고민해도 도저히 모르겠어서 gpt로 답구함
// 먼저 배포날짜들을 구함. Math.ceil을 사용해서 해당 값보다 큰 정수를 return하게함
// 그 다음각 배포날짜를 돌면서
function solution(progresses: number[], speeds: number[]): number[] {
  const releaseDays: number[] = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let maxDay = releaseDays[0];
  const answer: number[] = [1];

  for (let i = 1; i < releaseDays.length; i++) {
    if (releaseDays[i] <= maxDay) {
      answer[answer.length - 1]++;
    } else {
      maxDay = releaseDays[i];
      answer.push(1);
    }
  }

  return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

console.log(solution(progresses, speeds)); // Output should be [2, 1]

// 위 답을 받고도 머리가 안돌아가 해석이 안되서 아래와 같이 해석을 달라고 요청함.
// 값을 대입하면서 보니 이제야 알겠음.
// function solution(progresses: number[], speeds: number[]): number[] {
//   // progresses: [93, 30, 55]
//   // speeds: [1, 30, 5]
//   const releaseDays: number[] = progresses.map((progress, index) =>
//     Math.ceil((100 - progress) / speeds[index])
//   );
//   // releaseDays: [7, 3, 9]

//   let maxDay = releaseDays[0];  // maxDay: 7

//   const answer: number[] = [1];  // answer: [1]

//   for (let i = 1; i < releaseDays.length; i++) {
//     if (releaseDays[i] <= maxDay) {
//       // 첫 번째 loop: releaseDays[i] = 3 <= maxDay(7)
//       // 두 번째 loop: releaseDays[i] = 9 > maxDay(7)
//       answer[answer.length - 1]++;
//       // 첫 번째 loop 후 answer: [2]
//       // 두 번째 loop 후 answer: [2] (변경 없음)
//     } else {
//       maxDay = releaseDays[i];  // 두 번째 loop에서 maxDay는 9로 변경됨
//       answer.push(1);  // 두 번째 loop에서 answer에 1 추가, answer: [2, 1]
//     }
//   }
//   return answer;  // answer: [2, 1]
// }

// 각 배포마다 몇개의 기능인지가 중요. 이 문제의 경우 queue의 개념이 필요했음. First-in-First-out 첫번째 작업이 완료되어야 다음 작업도 가능했음.

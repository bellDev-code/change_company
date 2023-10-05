/* 옹알이 (1)
문제 설명
머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요. */

/* 제한사항
1 ≤ babbling의 길이 ≤ 100
1 ≤ babbling[i]의 길이 ≤ 15
babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
문자열은 알파벳 소문자로만 이루어져 있습니다.
 */

/* 
  입출력 예
babbling	result
["aya", "yee", "u", "maa", "wyeoo"]	1
["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	3
*/

/* 
입출력 예 설명
입출력 예 #1

["aya", "yee", "u", "maa", "wyeoo"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.
입출력 예 #2

["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye", "ye" + "ma" + "woo" = "yemawoo"로 3개입니다. 따라서 3을 return합니다.
유의사항
네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.
*/

// 순열을 이용해 모든 경우의 수를 구한다음 비교했음. 안좋은듯 정답률 33% 0단계 문제
// 순열을 이용해 모든 경우의 수를 구하는 방법을 알아야함. 재귀를 이용해 함수를 구현.

function solution(babbling) {
  var answer = 0;
  const pronunciations = ["aya", "ye", "woo", "ma"];
  let totalCombinations = [];

  // 순열을 통해 모든 경우의 수를 가져옴
  for (let i = 1; i <= 4; i++) {
    const partialCombinations = getPermutations(pronunciations, i);
    totalCombinations = [...totalCombinations, ...partialCombinations];
  }

  // babbling 배열 내 각 문자열의 출현 횟수를 카운트
  const babblingCount = {};
  babbling.forEach((item) => {
    if (!babblingCount[item]) {
      babblingCount[item] = 0;
    }
    babblingCount[item]++;
  });

  // 경우의 수를 babbling와 모두 비교 같은 값이 있다면 answer의 카운트를 올림.
  for (let i = 0; i < totalCombinations.length; i++) {
    if (babblingCount[totalCombinations[i]]) {
      answer += babblingCount[totalCombinations[i]];
    }
  }

  return answer;
}

const getPermutations = (arr, selectNum) => {
  const results = [];
  if (selectNum === 1) return arr;

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNum - 1);
    const attached = permutations.map((permutation) => fixed + permutation);
    results.push(...attached);
  });

  return results;
};

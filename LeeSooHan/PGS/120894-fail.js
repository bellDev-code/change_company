// 문제 설명
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// numbers는 소문자로만 구성되어 있습니다.
// numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
// 1 ≤ numbers의 길이 ≤ 50
// "zero"는 numbers의 맨 앞에 올 수 없습니다.
// 입출력 예
// numbers	result
// "onetwothreefourfivesixseveneightnine"	123456789
// "onefourzerosixseven"	14067

// 아래 코드는 인터넷을 서치하며 참고한 코드이다. split를 통해 10n만큼 배열을 돌아 숫자를 문자열로 바꾸어주는 방식이다.
// 그 아래 있는 코드는 o(n) 만큼만 돌아서 효율성이 더 좋은 코드이다. 시간만 놓고 본다면 위 코드가 평균 2초 아래코드는 평균 0.07초로 차이가 많이 난다.
function solution1(numbers) {
  var answer = numbers;

  const numberList = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numberList.length; i++) {
    let arr = answer.split(numberList[i]);

    answer = arr.join(i);
    console.log(answer);
  }

  return Number(answer);
}

function solution2(numbers) {
  const numDict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let result = "";

  let tempStr = "";

  for (const char of numbers) {
    tempStr += char;
    if (numDict[tempStr] !== undefined) {
      result += numDict[tempStr].toString();
      tempStr = "";
    }
  }

  return parseInt(result);
}

// 0단계를 오히려 못품

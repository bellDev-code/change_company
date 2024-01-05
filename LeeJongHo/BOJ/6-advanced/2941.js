const input = require('fs').readFileSync('./txt/2941.txt').toString().trim()

// 내가 풀이한 방법 (틀림)
// let croObject = {
//     "c=": 1,
//     "c-": 1,
//     "dz=": 1,
//     "d-": 1,
//     "lj": 1,
//     "nj": 1,
//     "s=": 1,
//     "z=": 1
// }

// let result = 0;

// for (let i = 0; i < input.length; i++) {
//     for (const x in croObject) {
//         if (input.startsWith(x, i)) {
//             result += croObject[x]
//             i += x.length - 1
//             break;
//         }
//     }
// }

// console.log(result)

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let alphabet of croatia) {
    input = input.split(alphabet).join("Q");
  }

  return input.length;
}

console.log(solution(input));
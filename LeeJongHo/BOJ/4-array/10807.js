const input = require('fs').readFileSync('./txt/10807.txt').toString().split('\n')

console.log(input)
// const numbers = input[2]
// const arr = input[1].split(' ')

// let result = 0
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === numbers) {
//         result += 1
//     }
// }

// console.log(result)


// 배열 관련 함수 풀이

const [n, arr, findNum] = input;

const result = arr.split(' ').filter((el) => el === findNum).length

console.log(result)
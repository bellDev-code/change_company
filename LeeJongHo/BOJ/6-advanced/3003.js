// 체스는 총 16개의 피스를 사용하며, 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성
// 첫째 줄에 동혁이가 찾은 흰색 킹, 퀸, 룩, 비숍, 나이트, 폰의 개수
// 몇 개의 피스를 더하거나 빼야 되는지를 출력
// input 예제 0 1 2 2 2 7

const input = require('fs').readFileSync('./txt/3003.txt').toString().split(' ').map(Number)

const chessArr = [1, 1, 2, 2, 2, 8]

let result = []
let count = 0

for (let i = 0; i < chessArr.length; i++) {
    if(chessArr[i] > input[i]) {
        count = chessArr[i] - input[i]
        result.push(count)
    } else if(chessArr[i] === input[i]) {
        result.push(0)
    } else if(chessArr[i] < input[i]) {
        count = chessArr[i] - input[i]
        result.push(count)
    }
}

console.log(result.join(' '))
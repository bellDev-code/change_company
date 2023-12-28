const input = require('fs').readFileSync('./txt/1330.txt').toString().split(' ')

const a = parseInt(input[0])
const b = parseInt(input[1])

function solution(a, b) {
    if(a > b) {
       console.log('>')
    } else if(a < b) {
       console.log('<')
    } else {
       console.log('==')
    }
}

solution(a, b)

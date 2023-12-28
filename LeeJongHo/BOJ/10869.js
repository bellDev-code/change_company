const input = require('fs').readFileSync('./txt/10869.txt').toString().split(' ')

console.log(Number(input[0]) + Number(input[1]))
console.log(input[0] - input[1])
console.log(input[0] * input[1])
console.log(Math.floor(input[0] / input[1]))
console.log(input[0] % input[1])

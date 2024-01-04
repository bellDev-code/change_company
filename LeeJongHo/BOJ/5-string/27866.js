const input = require('fs').readFileSync('./txt/27866.txt').toString().split('\n')

const str = input[0]
const count = input[1] * 1

console.log(str[count - 1])
const input = require('fs').readFileSync('./txt/10988.txt').toString().trim().split('')
const input2 = require('fs').readFileSync('./txt/10988.txt').toString().trim().split('').reverse()

console.log(input.join('') === input2.join('') ? 1 : 0)

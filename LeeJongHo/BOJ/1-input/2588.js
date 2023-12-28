const input = require('fs').readFileSync('./txt/2588.txt').toString().split('\n');

// console.log(input[0], input[1])

const num1 = parseInt(input[0])
const num2 = parseInt(input[1])

const result = num1 * (num2 % 10)
const result2 = num1 * (Math.floor((num2 % 100) / 10))
const result3 = num1 * Math.floor(num2 / 100)

const totalResult = result + result2 * 10 + result3 * 100

console.log(result)
console.log(result2)
console.log(result3)
console.log(totalResult)
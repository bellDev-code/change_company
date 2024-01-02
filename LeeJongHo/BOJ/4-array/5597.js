const input = require('fs').readFileSync('./txt/5597.txt').toString().split('\n')

let arr = new Array(30).fill(1).map((a, b) => a + b).map(String)

const result = arr.filter((x) => !input.includes(x))

console.log(result.join('\n'))
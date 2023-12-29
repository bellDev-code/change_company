const arr = require('fs').readFileSync('./txt/2562.txt').toString().split('\n').map((v) => v * 1)

const max = Math.max(...arr)

console.log(max)
console.log(arr.indexOf(max) + 1)
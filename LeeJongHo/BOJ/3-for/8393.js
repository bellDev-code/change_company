const input = require('fs').readFileSync('./txt/8393.txt').toString()
const numbers = Number(input)

let result = 0

for (let i = 1; i <= numbers; i++) {
    result += i 
}

console.log(result)
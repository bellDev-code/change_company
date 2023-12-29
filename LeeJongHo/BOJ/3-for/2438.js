const input = require('fs').readFileSync('./txt/2438.txt').toString()
const num = Number(input)

let result = ''
for (let i = 1; i <= num; i++) {
    result += '*'
    console.log(result)
}


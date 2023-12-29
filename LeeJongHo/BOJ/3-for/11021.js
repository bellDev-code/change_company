const input = require('fs').readFileSync('./txt/11021.txt').toString().split('\n')
const len = Number(input[0])

let result = 0;

for (let i = 1; i <= len; i++) {
    const el = input[i].split(' ')

    result = Number(el[0]) + Number(el[1])

    console.log(`Case #${i}: ${result}`)
}


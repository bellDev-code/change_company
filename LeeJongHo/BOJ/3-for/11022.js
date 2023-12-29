const input = require('fs').readFileSync('./txt/11022.txt').toString().split('\n')
const len = Number(input[0])

let result = ''

for (let i = 1; i <= len; i++) {
    const el = input[i].split(' ')

    result = Number(el[0]) + Number(el[1])

    console.log(`Case #${i}: ${Number(el[0])} + ${Number(el[1])} = ${result}`)
}
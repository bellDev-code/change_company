const input = require('fs').readFileSync('./txt/2908.txt').toString().trim().split(' ')

const a = parseInt(input[0].split('').reverse().join(''))
const b = parseInt(input[1].split('').reverse().join(''))

if(a > b) {
    console.log(a)
} else {
    console.log(b)
}
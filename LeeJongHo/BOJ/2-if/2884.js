const input = require('fs').readFileSync('./txt/2884.txt').toString().split(' ')

const h = parseInt(input[0])
const m = parseInt(input[1])

if(m < 45) {
    if(h === 0) {
        console.log(h + 23, 60 - 45 + m)
    } else {
        console.log(h - 1, 60 - 45 + m)
    }
} else {
    console.log(h, m - 45)
}
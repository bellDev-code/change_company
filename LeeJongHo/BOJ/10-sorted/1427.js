const input = require('fs').readFileSync('./txt/1427.txt').toString().trim().split('')

input.sort((a, b) => {
    return b - a
})

console.log(input.join(''))
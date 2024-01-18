const input = require('fs').readFileSync('./txt/2751.txt').toString().trim().split('\n')

input.shift()

input.sort((a, b) => {
    return a - b
})

console.log(input.join('\n'))
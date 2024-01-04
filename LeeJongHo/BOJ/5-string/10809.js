const input = require('fs').readFileSync('./txt/10809.txt').toString()

const result = []

for (let i = 97; i <= 122; i++) {
    result.push(input.indexOf(String.fromCharCode(i)))   
}

console.log(result.join(' '))
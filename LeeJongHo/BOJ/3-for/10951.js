const input = require('fs').readFileSync('./txt/10951.txt').toString().trim().split('\n')

for (let i = 0; i < input.length; i++) {
    const el = input[i].split(' ').map((v => v * 1))

    console.log(el[0] + el[1])
}
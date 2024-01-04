const input = require('fs').readFileSync('./txt/9086.txt').toString().split('\n')

for (let i = 1; i <= Number(input[0]); i++) {
    console.log(input[i].slice(0, 1) + input[i].slice(input[i].length - 1, input[i].length));
}

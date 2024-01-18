const input = require('fs').readFileSync('./txt/2750.txt').toString().trim().split('\n')

input.shift()

input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}

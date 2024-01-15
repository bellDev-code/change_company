const input = require('fs').readFileSync('./txt/10798.txt').toString().trim().split('\n')
const len = Math.max(...input.map((i) => i.length));

let result = '';

for (let i = 0; i < len; i++) {
  for (let j = 0; j < input.length; j++) {
    result += input[j][i] || '';
  }
}

console.log(result);
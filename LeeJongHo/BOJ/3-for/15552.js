let input = require('fs').readFileSync('./txt/15552.txt').toString().split('\n');

let num = Number(input[0]);
let result = '';

for (let i = 1; i <= num; i++) {
    let el = input[i].split(' ');
    result += Number(el[0]) + Number(el[1]) + '\n';
}

console.log(result);
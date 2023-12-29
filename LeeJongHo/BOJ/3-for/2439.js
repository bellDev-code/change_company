const input = require('fs').readFileSync('./txt/2439.txt').toString()
const num = Number(input)

let result = '';
let blank = '';

for (i = 1; i <= num; i++) {
    result += '*';
    
    for (let j = 0; j < input - i; j++) {
        blank += ' ';
    }
    console.log(blank + result);
    blank = '';
}
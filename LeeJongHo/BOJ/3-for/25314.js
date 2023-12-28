const input = require('fs').readFileSync('./txt/25314.txt').toString()

const count = parseInt(input) / 4;
let printLong = '';

for (let i = 1; i <= count; i++) {
    printLong += 'long ';
}

console.log(printLong + 'int');
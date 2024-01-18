const input = require('fs').readFileSync('./txt/24266.txt').toString().trim()

let num = BigInt(input);

console.log(`${num * num * num}`);
console.log('3');
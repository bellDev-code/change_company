const input = require('fs').readFileSync('./txt/2745.txt').toString().trim().split(' ')

let [num, div] = input;

let result = parseInt(num, Number(div))

console.log(result)
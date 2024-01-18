const input = require('fs').readFileSync('./txt/25305.txt').toString().trim().split('\n')

let input1 = input[0].split(' ');

const award = input1[1];

const grade = input[1].split(" ");

grade.sort((a,b) => b - a);

console.log(grade[award - 1]);

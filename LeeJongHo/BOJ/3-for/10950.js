const input = require('fs').readFileSync('./txt/10950.txt').toString().split('\n');

const num = Number(input[0]);

for(let i = 1; i <= num; i++){
  let score = input[i].split(' ');
  
  console.log(Number(score[0]) + Number(score[1]));
};

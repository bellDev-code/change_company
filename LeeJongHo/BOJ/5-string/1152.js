const input = require('fs').readFileSync('./txt/1152.txt').toString().trim().split(' ')

// console.log(input.length) => 공백 시 1이 세어진다. 그러므로 틀린 답이다.

let count = 0;
for (let i = 0; i < input.length; i++) {
    if(input[i] !== '') {
        count++;
    }
}

console.log(count)
const input = require('fs').readFileSync('./txt/10952.txt').toString().trim().split('\n')

for (let i = 0; i < input.length - 1; i++) {
    let numbers = input[i].split(' ').map(v => v * 1);
    
    console.log(numbers[0] + numbers[1]);
}
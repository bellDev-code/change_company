const input = require('fs').readFileSync('./txt/3052.txt').toString().split('\n').map(Number)

console.log(input)

const userNum = [];

input.forEach(x => {
     const num = x % 42;
    
    if (userNum.indexOf(num) === -1) {
        userNum.push(num);
    }
    
});

console.log(userNum.length);
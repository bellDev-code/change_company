const input = require('fs').readFileSync('./txt/2675.txt').toString().split('\n')

const len = input.shift();


for (let i = 0; i < len; i++) {
    let result = '';
    
    const [num, str] = input[i].split(" ");
    
    for (let j = 0; j < str.length; j++) {
        result += str[j].repeat(num);
    }
    
    console.log(result);
}
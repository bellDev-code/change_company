const input = require('fs').readFileSync('./txt/25304.txt').toString().split('\n')

const total = parseInt(input[0])
const buyLen = parseInt(input[1])

let result = 0
let isPossible = false

for (let i = 2; i <= buyLen + 1; i++) {
    let product = input[i].split(' ')
    
    result += product[0] * product[1]

    if(result === total) {
        isPossible = true;
        break;
    }
}

if(isPossible) {
    console.log('Yes')
} else {
    console.log('No')
}

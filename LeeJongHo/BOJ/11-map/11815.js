const input = require('fs').readFileSync('./txt/11815.txt').toString().trim().split('\n')

const [N, M] = [Number(input[0]), Number(input[2])];
const [hasCards, cards] = [new Set(input[1].split(' ').map(Number)), input[3].split(' ').map(Number)]

let result = '';
for(let i = 0; i < M; i++) {
    if(hasCards.has(cards[i])) {
        result += 1 + ' '
    }
    else {
        result += 0 + ' ';
    }
}

console.log(result);
const input = require('fs').readFileSync('./txt/2720.txt').toString().trim().split('\n')

const T = Number(input.shift())
const changes = input.map(Number)

console.log(T, changes)

const coins = [25, 10, 5, 1]

changes.forEach((change) => {
    const count = [0, 0, 0, 0]

    for (let i = 0; i < coins.length; i++) {
        if(change >= coins[i]){
            count[i] = Math.floor(change / coins[i]);
            change = change % coins[i];
        }
    }

    console.log(count.join(' '))
})
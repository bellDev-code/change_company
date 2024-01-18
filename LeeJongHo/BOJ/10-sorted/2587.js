const input = require('fs').readFileSync('./txt/2587.txt').toString().trim().split('\n')

const newArr = input.sort((a, b) => {
    return a - b
})

const middleEl = input.sort((a, b) => {
    return a - b
}).at(Math.floor(input.length / 2))

let ave = 0;
for (let i = 0; i < newArr.length; i++) {
    ave += newArr[i] / newArr.length
}

console.log(ave)
console.log(Number(middleEl))
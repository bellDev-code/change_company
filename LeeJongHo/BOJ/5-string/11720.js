const input = require('fs').readFileSync('./txt/11720.txt').toString().trim().split('\n')

const arr = input[1].split('')

let result = 0
for (let i = 0; i < arr.length; i++) {
    const element = Number(arr[i])
    
    result += element
}

console.log(result)

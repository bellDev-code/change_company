const input = require('fs').readFileSync('./txt/10818.txt').toString().trim().split('\n')

const arr = input[1].split(' ').map((v) => v * 1)
arr.sort(function(a, b) {
    return a - b;
})

console.log(arr[0], arr[arr.length -1])
const input = require('fs').readFileSync('./txt/10871.txt').toString().trim().split('\n')


const [numbers, arr] = input
const numArr = numbers.split(' ')
const findNum = Number(numArr[1])

const newArr = arr.split(' ').filter((el) => el < findNum)

console.log(newArr.join(' '))
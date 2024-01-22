const input = require('fs').readFileSync('./txt/1181.txt').toString().trim().split('\n')
input.shift()

const arr =[...new Set(input)]

const result = arr.sort((a,b)=> a.length - b.length || a.localeCompare(b)).join('\n')

console.log(result)
const input = require('fs').readFileSync('./txt/10814.txt').toString().trim().split("\n");

const len = input.shift();

input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(input.join("\n"));

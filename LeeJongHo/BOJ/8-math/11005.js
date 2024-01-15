let [num, divider] = require('fs').readFileSync('./txt/11005.txt').toString().trim().split(" ").map((item) => Number(item));

let result = num.toString(divider).toUpperCase();

console.log(result);
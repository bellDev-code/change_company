const input = require('fs').readFileSync('./txt/2739.txt').toString();
const num = Number(input);

for(let i = 1; i < 10; i++){
	console.log(num, "*", i, "=", num*i); 
}
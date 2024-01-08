const input = require('fs').readFileSync('./txt/25206.txt').toString().trim().split('\n').map(item=>item.split(' '));

console.log(input)

let sum = 0
let total = 0

const gradeObj = {
    "A+": 4.5, "A0": 4.0,
	"B+": 3.5, "B0": 3.0,
	"C+": 2.5, "C0": 2.0,
	"D+": 1.5, "D0": 1.0,
	"F": 0.0
}

for (const [name, score, grade] of input) {
    let num = 0

    if(grade === 'P') {
        continue;
    }
    
    sum += Number(score) * gradeObj[grade]
    total += Number(score)
}

console.log(sum / total)
const input = require('fs').readFileSync('./txt/11651.txt').toString().trim().split('\n')
const iter = Number(input.shift());

let arr = []

for (let i = 0; i < iter; i++) {
    arr.push(input[i].split(' ').map((item) => Number(item)));
}

arr.sort((a, b) => {
    if(a[1] === b[1]) {
        return a[0] - b[0]
    } else {
        return a[1] - b[1]
    }
})

let result = []

for(let i = 0; i < iter; i++){
    let answer = arr[i].join(' ');
    result.push(answer);
}


console.log(result.join('\n'))
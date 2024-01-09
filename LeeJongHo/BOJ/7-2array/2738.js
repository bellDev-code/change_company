const input = require('fs').readFileSync('./txt/2738.txt').toString().trim().split('\n').map((el) => el.split(' ').map(Number))
const [N, M] = input.shift();

// 2차원 배열 만들기
let arr = new Array(N).fill().map(() => new Array(M).fill(0));

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        arr[i][j] = input[i][j] + input[i + N][j];
    }
}

let result = "";

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        result += arr[i][j] + " ";
    }
    result += "\n";
}
console.log(result.trim());
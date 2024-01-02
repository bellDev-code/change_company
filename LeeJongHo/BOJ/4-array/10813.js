const input = require('fs').readFileSync('./txt/10813.txt').toString().split('\n')
const [N, M] = input[0].split(' ').map((v) => v * 1)

let arr = Array(N).fill(1).map((a, b) => a + b);
console.log(arr)


for (let i = 1; i <= M; i++) {
  let [x, y] = input[i].split(" ").map((v) => v * 1);
  let tmp = arr[x - 1];

  arr[x - 1] = arr[y - 1];
  arr[y - 1] = tmp;
}

console.log(arr.join(" "));
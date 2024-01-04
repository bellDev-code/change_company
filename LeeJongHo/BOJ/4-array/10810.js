const input = require('fs').readFileSync('./txt/10810.txt').toString().split('\n')
const [N, M] = input[0].split(" ").map((v) => v * 1);

let arr = new Array(N)

for (let i = 1; i <= M; i++) {
    let [start, end, k] = input[i].split(' ').map((v) => v * 1)
    
    for(start; start <= end; start++){
        arr[start - 1] = k;
    }
}

for (let j = 0; j < arr.length; j++) {
    typeof arr[j] === "undefined" ? arr[j] = 0 : arr[j]
}

console.log(arr.join(' '))
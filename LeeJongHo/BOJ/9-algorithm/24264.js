// MenOfPassion(A[], n) {
//     sum <- 0;
//     for i <- 1 to n
//         for j <- 1 to n
//             sum <- sum + A[i] × A[j]; # 코드1
//     return sum;
// }

const input = require('fs').readFileSync('./txt/24264.txt').toString().trim()

console.log(Math.pow(input,2));
console.log(2)
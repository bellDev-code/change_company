const input = require('fs').readFileSync('./txt/1157.txt').toString()

const newInput = input.toUpperCase()
const countArr = new Array(26).fill(0)

for(let i = 0; i < input.length; i++){
    // 알파벳 대문자부터 아스키 코드 65
    countArr[newInput.charCodeAt(i) - 65]++;
}

// console.log(countArr)

const max = Math.max(...countArr);
const index = countArr.indexOf(max);
let sameRate = false;

// 알파벳은 26개
for(let i = 0; i < 26; i++){
  if(countArr[i] === max && index != i){
    sameRate = true;
    break;
  }
}

// console.log(sameRate)

console.log(sameRate ? "?" : String.fromCharCode(index + 65));
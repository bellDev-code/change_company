const a = Number(require('fs').readFileSync('./txt/9498.txt').toString())

function solution(a) {
    if(a <= 100 && a >= 90) {
        console.log('A')
    } else if(a >= 80 && a <= 89) {
        console.log('B')
    } else if(a >= 70 && a <= 79) {
        console.log('C')
    } else if(a >= 60 && a <= 69) {
        console.log('D')
    } else {
        console.log('F')
    }
}

solution(a)
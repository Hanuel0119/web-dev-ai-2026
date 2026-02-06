// 가로로 숫자 7개가 뜨는게 아니라 세로로 숫자 7개가 뜨는 거 수정중입니다! indexof가 문제인 것 같아서 찾아보는중입니다
   
let first = [];
let second = [];
let third = [];
let fourth = [];
let fifth = [];

while (true) {
// 45까지 숫자 중 랜덤 숫자 뽑기
var result = 0;

for (var i= 0; i < 7; i++) {
    var numbers = Math.floor(Math.random() * 45) + 1;
}

// 배열 안에서 같은 코드가 있는지 찾고 무효 처리 하기
if (result.indexOf(numbers) !== 1) {
    i--; // i--는 이번 회차 무효 / 없던걸로 (기억해두기)
} else {
// 중복이 아니라면 다시 돌리기
    result.push(numbers);
}

console.log(result);
}
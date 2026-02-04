// 1. 매개변수 X, 리턴값 X
function sayHello() {
    console.log("안녕하세요!");
}
sayHello(); // 함수 호출
sayHello();

// 2. 매개변수 0, 리턴값 X
function greet(name = "게스트") {
    console.log(`${name}님, 안녕하세요!`)
}
greet("고은정");
greet("황지민");
greet();

// 3. 매개변수 X, 리턴값 O
// return : 함수 호출 결과, 함수 종료
function getNumber() {
    return 1049;
}
console.log(getNumber());

// 4. 매개변수 O, 리턴값 O
function add(a, b) {
    return a + b;
}
add(10, 20);
console.log(add(30, 50));

// 변수의 유효범위(Scope)
const num1 = 100; // 전역변수
function sample1() {
    const num1 = 200; // 지역변수
    // 함수 밖에서 안쪽 변수는 접근 불가
    console.log("sample1 내부 : " + num1); // 200
}
sample1();
console.log("sample1 외부 : " + num1); // 100

// 선언적 vs 익명 vs 화살표 함수
function multiply(a, b) {
    return a * b;
}
console.log("선언적 함수 :", multiply(3, 4));
return a * b;

// 익명 함수(Function Expression)
// 함수 이름이 없음
function (a, b) {
    return a - b;
};
console.log("익명 함수 :", subtract(5, 8));

// 화살표 함수(Arrow Function)
// function 대신 => 사용
const divide = (a, b) => {
    return a / b;
};
console.log("화살표 함수 :", divide(12, 3));

// 콜백 함수
// 다른 함수의 피라미터로 전달되는 함수
function callFunc(callback) {
    console.log("함수 호출 전!");
    callback(); // 콜백 함수 호출!
    console.log("함수 호출 후!");
}
function call() {
    console.log("안녕하세요~ 콜백 함수 호출!");
}
callFunc(call)

// 배열 관련 콜백 함수들
const numbers = [1, 2, 3, 4, 5];

// 1. 값을 하나씩 출력 -> forEach
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
numbers.forEach((value, index, array) => {
    console.log(value, index, array);
});

// 2. 배열의 값을 각각 2배로 만들어서 출력
// 각 배열의 값들을 가공하여 새로운 배열로 만들 때
// [2, 4, 6, 8, 10]
const doubled = [];
numbers.forEach((value, i) => {
    //doubled.push(value * 2);
    dubled[i] = value * 2;
});
console.log(doubled);

numbers.map((value) => {
    return value * 2;
});
    console.log(doubleMap);

// 3. 짝수만 출력
// [2, 4]
const even = [];
numbers.forEach((value) => {
    if (value % 2 === 0) even.push(value);
})
console.log(even);

const evenFilter = numbers.filter((value, index, array) => value % 2 === 0);
console.log(evenFilter);

// 4. 배열의 값을 총합
let sum = 0;
numbers.forEach((value) => {
    sum += value;
});
console.log(sum);

// reduce((accumulator 누적된 값, value, index, array) => {}, 초기값)
// 배열의 각 값들을 누적하여 하나의 값으로 변환
numbers.reduce((acc, value) => {
    console.log(`acc : ${acc}, value: ${value}`);
    return acc + value;
}, 0);
console.log(sumReduce);

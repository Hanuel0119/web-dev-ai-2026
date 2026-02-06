/* 
사람 {
    // 특징들!
    이름,
    나이,
    사는곳

    // 행동들! => 함수 (기능)
    일어난다
    밥먹는다
    씻는다
    옷입는다
    나간다
}
*/

// 변수끼리 서로 관련이 있다는 게 보이지 X
const name ="김현우";
const age = 10;
const addr = "서울";

// 배열은 서로 관련이 있다는 게 O, 각각의 갑싱 뭘 의미하느지 X
const personArr = ["김현우", 10, "서울"];

// 객체 (변수 - 키: 값)
const person = {
    // 변수
    name: "김현우",
    age: 10,
    addr: "서울",
    // 함수
    hello() {
        // this: 본인 자체
        console.log(`안녕하세요, ${this.name}입니다.`)
    },
};
console.log(person);
console.log(person.name);
person.hello();

// 객체 생성과 속성/함수 추가
const person1 = {};
person1.name = "고은정";
person1.name = "최서윤";
person1[`age`] = 9;
person1.hello = function () {
    console.log(`나는 ${this.name}이고, 나이는 ${this.age}살이야`);
};
console.log(person1);
person1.hello();

const person5 = new Object(); // 거의 안 씀! {}랑 동일
person5.name = "응애";
person5[`age`] = 7;
person5.hello = function () {
    console.log(`나는 ${this.name}이고, 나이는 ${this.age}살이야`);
};
person5.hello();

//this
const person3 = {
    name: "송슬비",
    hello: function () {
        console.log(this);
    },
};
const person4 = {
    name: "황지민",
    hello: () => {
        // 화살표 함수 내에서 this -> 전역 객체인 window
        // console.log(this.alert("안녕하세요!"));
        console.log(`화살표 함수 : ${this.name}`);
    },
};
person3.hello();
person4.hello();

// 생성자 함수, 클래스
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function () {
        console.log(`안녕? ${this.name}야, 나이는 ${this.age}살이야`);
    };
};
const p1 = new Person("고은정, 3");
person2.hello();

class Person2 {
    // 객체 생성시 호출
    constructor() {
        alert("!!!");
    }
}
const p3 = new Person2("홍서윤", 2);


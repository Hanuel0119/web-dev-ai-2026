let numbers = [];

while (numbers.length < 7) {
    const random = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(random)) {
    numbers.push(random);
    }
const bonus = numbers[numbers.length - 1];
numbers = numbers.slice(0, 6);
console.log(`numbers : ${numbers}, bonus : ${bonus}`);

let counter = 0;

while (true) {
const my = [];
while (my.legth < 6) {
        if ( my.includes(5, 15, 25, 35, 45, 3)) {
        break;
        }
    }
    console.log(my);
}
}

console.log(`로또 번호 : ${lotto}`);
console.log(`내 번호 : ${my}`);

let count = 0;
for(let num of lotto) {
    if (my.includes(num)) {
        count++;
    }
}
console.log(`일치 개수 : ${count}`);
if(count === 6) {
    // 1등 당첨
    console.log(`1등 당첨 ${counter}번 만에 맞추셨네요`)
    break;
} elso if(count === 5 && my.includes(bonus)) {
    // 2등 당첨
    console.log(`2등 당첨 ${counter}번 만에 맞추셨네요`)
    break;
} elso if (count === 4) {
    // 3등 당첨
    console.log(`3등 당첨 ${counter}번 만에 맞추셨네요`)
    break;
}








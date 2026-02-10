// 친구의 도움을 받음
// 사진
const photo = [
    `./assets/spy1.jpg`,
    `./assets/spy2.jpg`,
    `./assets/spy3.jpg`,
];

// 랜덤
function getRandomImage() {
    return photo[Math.floor(Math.random() * photo.length)];
}

function setRandomImage() {
    const photo1 = document.querySelector('.photo').style.backgroundImage = `url(${getRandomImage()}`;
    const photo2 = document.querySelector('.photo2').style.backgroundImage = `url(${getRandomImage()}`;
    const photo3 = document.querySelector('.photo3').style.backgroundImage = `url(${getRandomImage()}`;

    // 맞춘 거 띄워주기
    if(photo1 === photo2 && photo2 === photo3) {
    console.log(`맞추셨어요! 축해해요!`)
    }
}

// 시작 사진 불러오기 (재시작)
document.querySelector('.photo').style.backgroundImage = `url(./assets/spy1.jpg)`;
document.querySelector('.photo2').style.backgroundImage = `url(./assets/spy2.jpg)`;
document.querySelector('.photo3').style.backgroundImage = `url(./assets/spy3.jpg)`;


// 재시작 활성화
document.getElementById(`btn2`).addEventListener(`click`, function() {
    location.reload();
});

// 돌리기 활성화
document.getElementById('btn').addEventListener('click', setRandomImage);

console.log(`번호 : ${photo}`);
console.log(`내 번호 : ${setRandomImage}`);

// 돌린 횟수
let count = 0;
function onClick() {
    count++;
    console.log(`${count}`);
}

// 버튼 클릭 = onClick
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    onClick();
});

const player = {};
const computer = {};
const game = {
win: 0,
lose: 0,
draw: 0,
play() {
    while (true) {
    
    let player = prompt("가위, 바위, 보");

    // 컴퓨터가 랜덤으로 가위 바위 보를 띄우기
    let computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
        computer = "가위";
    } else if (computer === 1) {
        computer = "바위";
    } else {
        computer = "보";
    }
    console.log(computer);

    // 다른 단어가 나올 시 재입력 요구
    if ( player !== "가위" && player !== "바위" && player !== "보" && player !== null && player !=="") {
    alert("가위, 바위, 보 중에서 다시 입력해주세요.");
    }

    if ( player === "가위" && computer === "보" || player === "바위" && computer === "가위" || player === "보" && computer === "바위") {
    alert("이겼다");
    this.win++;
    continue;
    }

    if ( player === "바위" && computer === "보" || player === "보" && computer === "가위" || player === "가위" && computer === "바위") {
    alert("졌다");
    this.lose++;
    continue;
    }

    if ( player === computer ) {
    alert("비겼다"); 
    this.draw++;
    continue;
    }

    // 종료
    if ( player === null || player === "") {
    alert(`게임이 종료되었습니다. 승리 ${this.win}번, 패배 ${this.lose}번, 무승부 ${this.draw}번`);

    break;
    }
}
}
};

game.play();

/*
// 점수

let win = 0;
let lose = 0;
let draw = 0;

// 반복문
while (true) {
    
    let player = prompt("가위, 바위, 보");

    // 컴퓨터가 랜덤으로 가위 바위 보를 띄우기
    let computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
        computer = "가위";
    } else if (computer === 1) {
        computer = "바위";
    } else {
        computer = "보";
    }
    console.log(computer);

    // 다른 단어가 나올 시 재입력 요구
    if ( player !== "가위" && player !== "바위" && player !== "보" && player !== null && player !=="") {
    alert("가위, 바위, 보 중에서 다시 입력해주세요.");
    }

    if ( player === "가위" && computer === "보" || player === "바위" && computer === "가위" || player === "보" && computer === "바위") {
    alert("이겼다");
    win++;
    continue;
    }

    if ( player === "바위" && computer === "보" || player === "보" && computer === "가위" || player === "가위" && computer === "바위") {
    alert("졌다");
    lose++;
    continue;
    }

    if ( player === computer ) {
    alert("비겼다"); 
    draw++;
    continue;
    }

    // 종료
    if ( player === null || player === "") {
    alert(`게임이 종료되었습니다. 승리 ${win}번, 패배 ${lose}번, 무승부 ${draw}번`);

    break;
    }
}
*/
// 1 ~ 100까지의 랜덤 숫자 생성
function getTarget() {
    return Math.floor(Math.random() * 100) + 1;
}

const random = getTarget();
let count = 0;

const result = judge();
let input;

// 사용자 입력
while (true) {
    count++;
    let input = prompt("1~100까지의 숫자 중 하나를 입력하세요");

// 취소 버튼을 눌렀을 때 input이 null인데 이때 종료
if (input === null) {
    alert("게임이 종료되었습니다.");
    break;
    }

if (isNaN(input) || input === "" || input < 1 || input > 100) {
    alert("1~100까지의 숫자만 입력해주세요!");
    continue;
    }

    input = Number(input);

    // 판단 - 사용자가 적은 수가 더 높거나 낮을 때 continue
    if (input > random) {
        alert("더 낮은 수입니다.");
        continue;
    }

    if (input < random) {
        alert("더 높은 수입니다.");
        continue;
    }

    // ${count}로 카운트 실행해서 몇 번만에 맞췄는지 알려주기
    alert(`정답! ${count}번 만에 맞추셨네요!`);
    break;
}
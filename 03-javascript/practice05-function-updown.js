// 1 ~ 100까지의 랜덤 숫자 생성
function getTarget() {
    return Math.floor(Math.random() * 100) + 1;
}

// 사용자 입력
function setInput() {
    return prompt("1~100 숫자를 맞혀보세요!");
}

// 메세지 출력
function showMessage(message) {
    alert(message);
}

// 판단
function judge(input, answer) {
    if (input === null) {
        return { result: "cancel" };
    }
}
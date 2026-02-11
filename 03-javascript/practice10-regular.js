const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const inputs = document.querySelectorAll("input");

submitBtn.addEventListener("click", function () {
  const id = inputs[0].value.trim();
  const pw = inputs[1].value.trim();
  const pwCheck = inputs[2].value.trim();
  const name = inputs[3].value.trim();
  const email = inputs[4].value.trim();
  const phone = inputs[5].value.trim();

  // 아이디: 영문자로 시작, 영문+숫자 조합 4~12자
  const idRegex = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;

  // 비밀번호: 영문+숫자+특수문자 포함 8~15자
  const pwRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+|<>?:{}])[A-Za-z\d!@#$%^&*()_+|<>?:{}]{8,15}$/;

  // 이름: 한글 2자 이상
  const nameRegex = /^[가-힣]{2,}$/;

  // 이메일 형식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 전화번호
  const phoneRegex = /^010-?\d{4}-?\d{4}$/;

  // 검사
  if (!idRegex.test(id)) {
    alert("아이디 형식이 올바르지 않습니다.");
    return;
  }

  if (!pwRegex.test(pw)) {
    alert("비밀번호 형식이 올바르지 않습니다.");
    return;
  }

  if (pw !== pwCheck) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  if (!nameRegex.test(name)) {
    alert("이름은 한글 2자 이상이어야 합니다.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("이메일 형식이 올바르지 않습니다.");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("전화번호 형식이 올바르지 않습니다.");
    return;
  }

  alert("회원가입이 완료되었습니다!");
});

// 취소
resetBtn.addEventListener("click", function () {
  inputs.forEach((input) => {
    input.value = "";
  });

  alert("입력 내용이 초기화되었습니다.");
});

const quotes = [
  {
    en: "God doesn't require us to succeed: he only requires that you try.",
    ko: "신은 우리에게 성공을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.",
  },
  {
    en: "Hold faithfulness and sincerity as first principles.",
    ko: "충심과 성실을 첫 번째 원칙으로 삼아라.",
  },
  {
    en: "Only actions give life strength; only moderation gives it a charm.",
    ko: "행동만이 삶에 힘을 주고 절제만이 삶에 매력을 준다.",
  },
  {
    en: "No one has ever made a difference by being like everyone else.",
    ko: "그저 남들과 똑같이 살면서 차이를 만들어낸 사람은 없다.",
  },
];

const now = new Date();
// 숫자를 두 자리로 만들 때 사용
const minute = String(now.getMinutes()).padStart(2, "0");

// 요일 배열 제공
const weeks = ["일", "월", "화", "수", "목", "금", "토"];
const week = weeks[now.getDay()];

// 한국어, 영어
const enEl = document.getElementById("en")
const koEl = document.getElementById("ko")

// 색 바꾸기
 document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

setInterval(() => {
    document.body.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}, 3000);

// 현재 시간
const current = () => {
    const now = new Date();
    console.log(now.getFullYear()); // 년
    console.log(now.getMonth() + 1); // 월
    console.log(now.getDate()); // 일
    console.log(now.weeks[now.getDay()]); // 요일
    console.log(now.getHours()); // 시
    console.log(now.getMinutes()); // 분
    console.log(now.String(now.getSeconds()).padStart(2, "0")); // 초
}

// 남은 시간
const countEl = document.getElementById("ko2");

const count = () => {
    const last = new Date("2026-02-09 16:45:00")
    const now = new Date();
    // console.log(Math.floor((last - now) / 1000));
    const second = Math.floor((last - now) / 1000); // 1000ms = 1초
    const minute = Math.floor(second / 60); // 60초 = 1분
    const hour = Math.floor(minute / 60); // 60분 = 1시간
    const day = Math.floor(hour / 24);// 24시간 = 1일
    console.log(day); // 일
    console.log(hour % 24); // 시간
    console.log(minute % 60); // 분
    console.log(second % 60); // 초

    countEl.textContent = `올해 남은 시간: ${day}일 ${displayHours}시 ${displayMinutes}분 ${displaySeconds}초`;
};


const quoteEl = document.getElementById("quote");

const randomQuote = () => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
       enEl.textContent = quote.en;
       koEl.textContent = quote.ko;
       setInterval(randomQuote, 3000);
    };

randomQuote();
current();
count();
setInterval(count, 1000);







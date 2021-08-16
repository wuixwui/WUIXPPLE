const arrDayStr = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

const dateDay = document.querySelector("main .today__date");
const dateTime = document.querySelector("main .today__time");

function getClock() {
  const date = new Date();
  dateDay.innerText = `${date.getMonth() + 1}월 ${date.getDate()}일 ${
    arrDayStr[date.getDay()]
  }`;
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  dateTime.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000);

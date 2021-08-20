let talk = [
  "이 즐거운 하루가 되면 좋겠어요!",
  "의 오늘 하루는 어떠신가요?",
  ", 식사를 잊으시면 안돼요!",
  "! 오늘도 힘내요!",
  "께서 읽고 싶었던 책을 읽어보면 어떨까요?",
  "의 오늘 일정이 힘들지 않았으면 좋겠어요!",
  "께 신나는 일이 생길 것만 같아요!",
  "~ 지금 커피 한잔 어때요?",
  "은 뭐하고 계시나요?",
  "! 쉬면서 하세요!",
  "~ 스트레칭 하셔야죠!",
];
const inputTalk = [
  "힘내요!",
  "멋진 일이네요!",
  "좋은 결과가 있을 것 같아요~",
  "계획을 세워볼까요?",
];

const successTalk = [
  "은 정말 대단해요!",
  "~ 고생 많았어요~",
  "~ 성공~",
  "! 다른 일도 해볼까요?",
  "은 정말 멋져요!",
  "~ 멋져요~",
  "~ 딩동댕동~",
  "... 당신은 다 계획이 있었군요?",
];

const randomIconImg = randomIcon.querySelector("img");

function msgTalk() {
  randomIconImg.src = "./images/white_apple_logo.png";
  randomIcon.style.background = "#000";
  randomMsg.classList.remove(classHidden);
  setTimeout(function () {
    randomIconImg.src = "./images/black_apple_logo.png";
    randomIcon.style.background = "#fff";
    randomMsg.classList.add(classHidden);
  }, 1500);
}
randomIcon.addEventListener("click", function () {
  randomMsg.innerText =
    saveUserName + "님" + talk[Math.floor(Math.random() * talk.length)];
  msgTalk();
});

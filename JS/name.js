const userName = document.getElementById("user-name");

const nameInsertPopup = document.querySelector("main .pop-up");
const nameInsertForm = nameInsertPopup.querySelector(".name-insert");
const nameInsertInput = document.getElementById("user-name-input");
const nameEdit = document.getElementById("edit-name");

const userNameKey = "user_name";
const classHidden = "hidden";
let saveUserName = localStorage.getItem(userNameKey);
// msg
const msgIcon = document.querySelector(".msg--icon");
const randomMsg = msgIcon.querySelector(".random-msg");
const randomIcon = msgIcon.querySelector(".icon");

function userNameSubmit(event) {
  event.preventDefault();
  localStorage.setItem(userNameKey, nameInsertInput.value);
  userName.innerText = nameInsertInput.value;
  nameInsertPopup.classList.add(classHidden);
  saveUserName = localStorage.getItem(userNameKey);
  console.log(saveUserName);
  randomMsg.innerText = `${nameInsertInput.value}님 반가워요!`;
  randomMsg.classList.remove(classHidden);
  setTimeout(function () {
    randomMsg.classList.add(classHidden);
  }, 2000);
}

function userNameEdit() {
  localStorage.removeItem(userNameKey);
  nameInsertPopup.classList.remove(classHidden);
  nameInsertForm.addEventListener("submit", userNameSubmit);
}

if (saveUserName === null) {
  nameInsertPopup.classList.remove(classHidden);
  nameInsertForm.addEventListener("submit", userNameSubmit);
} else {
  nameInsertPopup.classList.add(classHidden);
  userName.innerText = saveUserName;
}

nameEdit.addEventListener("click", userNameEdit);

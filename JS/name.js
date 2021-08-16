const userName = document.getElementById("user-name");

const nameInsertPopup = document.querySelector("main .pop-up");
const nameInsertForm = nameInsertPopup.querySelector(".name-insert");
const nameInsertInput = document.getElementById("user-name-input");
const nameEdit = document.getElementById("edit-name");

const userNameKey = "user_name";
const classHidden = "hidden";
const saveUserName = localStorage.getItem(userNameKey);

function userNameSubmit(event) {
  event.preventDefault();
  localStorage.setItem(userNameKey, nameInsertInput.value);
  userName.innerText = nameInsertInput.value;
  nameInsertPopup.classList.add(classHidden);
}
function userNameEdit() {
  localStorage.removeItem(userNameKey);
  nameInsertPopup.classList.remove(classHidden);
}

if (saveUserName === null) {
  nameInsertPopup.classList.remove(classHidden);
  nameInsertForm.addEventListener("submit", userNameSubmit);
} else {
  nameInsertPopup.classList.add(classHidden);
  userName.innerText = saveUserName;
}

nameEdit.addEventListener("click", userNameEdit);
nameInsertForm.addEventListener("submit", userNameSubmit);

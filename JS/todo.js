const todo = document.querySelector(".todo-container");
const todoForm = todo.querySelector(".todo__input-bar");
const todoNum = todoForm.querySelector(".todo-num");
const todoInput = document.getElementById("todo--input");
const todoList = todo.querySelector(".todo-list");
const todoItemClass = "todo-item";
const todoBtnClass = "btn";
const TODOS_KEY = "todos";
const deleteAllTodo = document.getElementById("delete-all-todo");

let todoNumCount = 0;
let toDos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
  localStorage.setItem("count", todoNumCount);
}

function successTodo(event) {
  const successTodo = event.target.parentNode;
  successTodo.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(successTodo.id));
  todoNumCount -= 1;
  todoNum.innerText = todoNumCount;
  saveTodos();
  randomMsg.innerText =
    saveUserName +
    "님" +
    successTalk[Math.floor(Math.random() * successTalk.length)];
  msgTalk();
}

function deleteTodo(event) {
  const deleteTodo = event.target.parentNode;
  // 화면에서 요소 삭제
  deleteTodo.remove();
  // local 저장소에서 데이터 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteTodo.id));
  todoNumCount -= 1;
  todoNum.innerText = todoNumCount;
  saveTodos();
  randomMsg.innerText = "...삭제중...";
  msgTalk();
}

function paintTodo(newtodo) {
  // new todo list
  const newTodolist = document.createElement("li");
  newTodolist.classList.add(todoItemClass);
  newTodolist.id = newtodo.id;
  // todo list children
  const newSpan = document.createElement("span");
  newSpan.innerText = newtodo.todo;
  const newBtnSuccess = document.createElement("button");
  const newBtnDelete = document.createElement("button");
  newBtnSuccess.classList.add(todoBtnClass, "todo__btn--success");
  newBtnDelete.classList.add(todoBtnClass, "todo__btn--delete");
  newBtnSuccess.innerText = "success";
  newBtnDelete.innerText = "delete";
  // append
  newTodolist.append(newSpan, newBtnSuccess, newBtnDelete);
  todoList.appendChild(newTodolist);
  newBtnSuccess.addEventListener("click", successTodo);
  newBtnDelete.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  if (todoInput.value === "") {
    randomMsg.innerText = "어떤 일을 하고 싶은지 알려주세요!";
    msgTalk();
    return console.log("입력이 필요합니다.");
  } else {
    randomMsg.innerText =
      inputTalk[Math.floor(Math.random() * inputTalk.length)];
    msgTalk();
  }
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    todo: newTodo,
  };
  todoNumCount += 1;
  todoNum.innerText = todoNumCount;
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  // local에 데이터 저장
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
const savedCount = localStorage.getItem("count");

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  //toDos 이전 목록 가져오기
  todoNumCount = parseInt(savedCount);
  todoNum.innerText = todoNumCount;
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

deleteAllTodo.addEventListener("click", function () {
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  todoNumCount = 0;
  todoNum.innerText = todoNumCount;
  toDos = [];
  saveTodos();
});

const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function checkBoxToggle(event) {
    const li = event.target.parentElement;
    const targetIndex = parseInt(toDos.findIndex((toDo) => toDo.id === parseInt(li.id)));
    const originTodo = toDos[targetIndex];
    const span = li.querySelector("span");
    const btnChk = event.target;
    const strike = document.createElement("strike");
    if (btnChk.checked) {
        strike.innerText = span.innerText;
        span.innerText = "";
        originTodo.completed = true;
        const msg = document.createElement("span");
        msg.classList.add('completed')
        msg.innerText = " - Completed";
        span.appendChild(strike);
        span.appendChild(msg);
    } else {
        originTodo.completed = false;
        const getStrike = span.querySelector("strike");
        span.innerText = getStrike.innerText;
        getStrike.remove();
    }
    saveToDos();
    console.log(toDos[targetIndex]);
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btnChk = document.createElement("input");
    btnChk.type = "checkbox";
    btnChk.value = newTodo.id;
    btnChk.classList.add("checkbox");
    btnChk.checked = newTodo.completed;
    btnChk.addEventListener("click", checkBoxToggle)
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(btnChk);
    li.appendChild(span);
    if (newTodo.completed) {
        const strike = document.createElement("strike");
        strike.innerText = newTodo.text;
        span.innerText = "";
        const msg = document.createElement("span");
        msg.classList.add('completed')
        msg.innerText = " - Completed";
        span.appendChild(strike);
        span.appendChild(msg);
    }
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        completed: false
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
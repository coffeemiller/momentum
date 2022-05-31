const userContainer = document.querySelector('#user_container');
const todoContainer = document.querySelector('#todo_container');
const userForm = document.querySelector('#user_form');
const userInput = userForm.querySelector("input");

let username = '';
const HIDDEN_KEY = 'hidden';
const USERNAME_KEY = 'username';
const greeting = document.querySelector('#greeting_container');
const greetingText = document.querySelector('#greeting_container');
const hour = String((new Date()).getHours()).padStart(2, "0");


function toggle() {
    userContainer.classList.toggle(HIDDEN_KEY);
    greeting.classList.toggle(HIDDEN_KEY);
    todoContainer.classList.toggle(HIDDEN_KEY);
}


if (localStorage.username) {
    username = localStorage.username;
    toggle();
    message(hour)
} else {
    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        username = userInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        toggle();
        message(hour)
    });
}


function message(hour) {
    const span = document.createElement("span");
    span.className = "greeting";
    if (hour > 5 && hour < 11) {
        span.innerText = "Good Morning, " + username + "!!";
    } else if (hour >= 11 && hour < 14) {
        span.innerText = username + ", Did you have lunch?";
    } else if (hour >= 14 && hour < 17) {
        span.innerText = "Good Afternoon " + username + "!!";
    } else if (hour >= 17 && hour < 23) {
        span.innerText = "Good Evening, " + username + "!!";
    } else {
        span.innerText = "Hello~! " + username;
    }
    greetingText.appendChild(span);
}
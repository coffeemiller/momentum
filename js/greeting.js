const userContainer = document.querySelector('#user_container');
const userForm = document.querySelector('#user_form');
const userInput = document.querySelector('#user_input');

let username = '';
const HIDDEN_KEY = 'hidden';
const USERNAME_KEY = 'username';

const greeting = document.querySelector('#greeting_container');
// const greetingText = document.querySelector('#greeting_text');
const greetingText = document.querySelector('#greeting_container span:first-child');

function message(hour) {
  if (hour > 5 && hour < 11) {
    greetingText.innerText = "Good Morning, "+username+"!!";
  } else if (hour >= 11 && hour < 14) {
    greetingText.innerText = username+", Did you have lunch?";
  } else if (hour >= 14 && hour < 17) {
    greetingText.innerText = "Good Afternoon "+username+"!!";
  } else if (hour >= 17 && hour < 23) {
    greetingText.innerText = "Good Evening, "+username+"!!";
  } else {
    greetingText.innerText = "Hello~! "+{username};
  }
}

if (localStorage.username) {
  userContainer.classList.add(HIDDEN_KEY);
  greeting.classList.remove(HIDDEN_KEY);
  username = localStorage.username;
} else {
  userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    username = userInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    userContainer.classList.add(HIDDEN_KEY);
    greeting.classList.remove(HIDDEN_KEY);
  });
}


const clock = document.querySelector("h2#clock");
let hour = "";

function getClock() {
    const date = new Date();
    hours = String(date.getHours()).padStart(2, "0");
    hour = hours;
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
message(hour);

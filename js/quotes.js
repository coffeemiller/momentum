const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = "";
fetch('https://api.adviceslip.com/advice').then(response =>
  response.json().then(data => ({
    data: data,
    status: response.status
  })).then(res => {
    quote.innerText = res.data.slip.advice;
  }));
const imagWidth = 1920;
const imagHeight = 1080;

fetch(
        `https://picsum.photos/${imagWidth}/${imagHeight}/?random`
    )
    .then(response => {
        const jsBody = document.querySelector('body');
        jsBody.style = `background-image: url('${response.url}')`;
        // console.log("background image source download, success!!");
    })
    .catch(err => {
        console.log(err);
    });
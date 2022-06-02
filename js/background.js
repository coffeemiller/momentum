const imagWidth = 2562;
const imagHeight = 3000;

fetch(
        `https://picsum.photos/${imagWidth}/${imagHeight}/?random`
    )
    .then(response => {
        const jsBody = document.querySelector('body');
        jsBody.style.backgroundImage = `url('${response.url}')`;
        jsBody.style.backgroundRepeat = 'no-repeat';
        jsBody.style.backgroundPosition = 'center';
        jsBody.style.backgroundSize = 'cover';
    })
    .catch(err => {
        console.log(err);
    });
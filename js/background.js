const jsBody = document.querySelector('body');
jsBody.style.backgroundRepeat = 'no-repeat';
jsBody.style.backgroundPosition = 'center';
jsBody.style.backgroundSize = 'cover';
const imagWidth = 2562;
const imagHeight = 9000;

//`https://picsum.photos/${imagWidth}/${imagHeight}/?random`

try {
    fetch(
            `https://source.unsplash.com/random/${imagWidth}x${imagHeight}`
        )
        .then(response => {
            // const jsBody = document.querySelector('body');
            jsBody.style.backgroundImage = `url('${response.url}')`;
            // jsBody.style.backgroundRepeat = 'no-repeat';
            // jsBody.style.backgroundPosition = 'center';
            // jsBody.style.backgroundSize = 'cover';
        })
        .catch(err => {
            console.log(err);
        });
} catch (err) {} finally {
    jsBody.style.backgroundImage = 'url(img/bgImage.jpg)';
}
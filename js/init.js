
const imagWidth = 1920;
const imagHeight = 1080;
const collectionID = 8469893; // Warm Toned Mediterranean(106 photos)

// alert("aaaa");

// function test() {
//   alert("test");
// }

fetch(
  // `https://source.unsplash.com/collection/${collectionID}/${imagWidth}x${imagHeight}/`
  `https://picsum.photos/${imagWidth}/${imagHeight}/?random`
)
  .then(response => {
    const jsBody = document.querySelector('body');
    jsBody.style = `background-image: url('${response.url}')`;
    console.log("background image source download, success!!");
  })
  .catch(err => {
    console.log(err);
  });



//  /**
//  * 
//  * toggleLinks is used to make saved links box to appear/disappear when clicking "links" 
//  * addLinkInputs/removelinkInputs allow the input to appear/disppear when clicking.
// */

// const toggleLinks = function () {
           
//   $('.inputlink').toggleClass('show');
  
//   runLinksQuery();
//   renderLinks();
// }
// $('#favlinks').on('click', toggleLinks);

// const addlinkInputs = function () {
  
//    $('.linkinputs').addClass('show');
//    $('#newlinks').addClass('hide');
// }
// $('#newlinks').on('click', addlinkInputs);

// const removelinkInputs = function () {
  
//    $('.linkinputs').removeClass('show');
//    $('#newlinks').removeClass('hide');
// }
// $('#nevermind').on('click', removelinkInputs);

  //https://source.unsplash.com/collection/8469893/1920x1080
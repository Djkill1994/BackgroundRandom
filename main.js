const bgButtonRandom = document.querySelector('.bgButtonRandom');

function randomBgColor (){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z= Math.floor(Math.random() * 256);
    let rgbRandom = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = rgbRandom;
}

bgButtonRandom.addEventListener("click", randomBgColor);
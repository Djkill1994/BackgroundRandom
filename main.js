const bgButtonRandom = document.querySelector('.bgButtonRandom');
const hexColor = document.querySelector('.hexColor');


function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return
}

function randomBgColor () {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);


    rgbToHex(x, y, z);

    let rgbRandom = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = rgbRandom;
    let textHexColor = 'HEX color:';
    hexColor.innerHTML = rgbToHex(x, y, z);
}
bgButtonRandom.addEventListener("click", randomBgColor);

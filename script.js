const outputElement = document.querySelector('#output');
const btnCopy = document.querySelector('#btnCopy');
const passwordLengthElement = document.querySelector('#length');
const numberElement = document.querySelector('#number');
const capitalElement = document.querySelector('#capital');
const smallElement = document.querySelector('#small');
const symbolElement = document.querySelector('#symbol');
const frm = document.querySelector('#frm');

//Button Click to copy password
btnCopy.addEventListener('click', async()=>{
    const pass = outputElement.value;
    console.log(pass);
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert("Copied to clipboard");
    }else{
        alert("There is no password to copy.");
    }
});

/*
ASCII -American Standard Code for Information Interchange



65-90 -  A-Z
97-122 - a -z
48-57 - 0 -9
32 - space
*/

function generateRandomChar(min, max) {
    const limit = max -min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

function capitalValue() {
    return generateRandomChar(65, 90);
}

function smallValue() {
    return generateRandomChar(97, 122);
}

function capitalValue() {
    return generateRandomChar(48, 57);
}

function symbolValue() {
    const symbols = "~!@#$%^&(){}[]<>,.:;|\/*-+";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

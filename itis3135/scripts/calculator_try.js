const calcholder =document.getElementById('calculator');
const display =document.getElementById('display');
const addition =document.getElementById('plus');
const subtraction =document.getElementById('minus');
const multiplication =document.getElementById('multiply');
const division =document.getElementById('divide');
const equal =document.getElementById('equal');

const zero =document.getElementById('zero');
const one =document.getElementById('one');
const two =document.getElementById('two');
const three =document.getElementById('three');
const four =document.getElementById('four');
const five =document.getElementById('five');
const six =document.getElementById('six');
const seven =document.getElementById('seven');
const eight =document.getElementById('eight');
const nine =document.getElementById('nine');

function showDisplay(str){
    display.innerText+=str;
    return parseInt(str);
}
// equal.addEventListener("click", ()=>{
//     const equationRegex= /([0-9]) [+-*/] ([0-9])/;
//     if(display.innerText.match(equationRegex)){
//         display.innerText="1"+"3";
//     }
//     else{
//         display.innerText="ERROR";
//     }
// })



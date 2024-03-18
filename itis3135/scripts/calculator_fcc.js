window.onload= ()=>{
const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";



const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }
    else if(btnValue === "AC"){
        output = "";
    }
    else if(btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    }
    else if(specialChars.includes(btnValue)){
        output += btnValue;
    }
    else{
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
}
// const calculator = document.querySelector('.calculator');
// const keys = calculator.querySelector('.calculator_keys');
// const display = document.querySelector('.calculator_display');


// keys.addEventListener('click', e => {
//     //const resultString = createResultString(()=>'some value')
//  if (e.target.matches('button')) {
//     const key = e.target;
//     const action = key.dataset.action;
//     const keyContent = key.textContent;
//     const displayedNum = display.textContent;
    
//     if (!action) {
//         console.log('number key!');
//         calculator.dataset.previousKey = 'number';
//         secondValue = calculator.dataset.modValue;
//         if (displayedNum === '0' || previousKeyType === 'operator'||previousKeyType === 'calculate') {
//             display.textContent = keyContent
//         } else {
//             display.textContent = displayedNum + keyContent
//         }
//       }
//     if (
//     action === 'add' ||
//     action === 'subtract' ||
//     action === 'multiply' ||
//     action === 'divide'
//     ) {
//         console.log('operator key!');
//         const firstValue = calculator.dataset.firstValue;
//         const operator = calculator.dataset.operator;
//         const secondValue = displayedNum;
//         if (firstValue && operator && previousKeyType !== 'operator'&&previousKeyType !== 'calculate') {
//             const calcValue = calculate(firstValue, operator, secondValue);
//             display.textContent = calcValue;
//             calculator.dataset.firstValue = calcValue;
//           }else {
//             calculator.dataset.firstValue = displayedNum;
//           }
//         key.classList.add('is-depressed');
//         calculator.dataset.previousKeyType = 'operator';
//         calculator.dataset.firstValue = displayedNum;
//         calculator.dataset.operator = action;
//       }
//     if (action === 'decimal') {
//         console.log('decimal key!');
//         if (!displayedNum.includes('.')) {
//             display.textContent = displayedNum + '.'
//         } else if (previousKeyType === 'operator'||previousKeyType === 'calculate') {
//             display.textContent = '0.'
//         }
//         calculator.dataset.previousKey = 'decimal';
//         display.textContent = displayedNum + '.';

//     }
      
//     if (action === 'clear') {
//         console.log('clear key!');
//         if (key.textContent === 'AC') {
//             calculator.dataset.firstValue = ''
//             calculator.dataset.modValue = ''
//             calculator.dataset.operator = ''
//             calculator.dataset.previousKeyType = ''
//         } else {
//             key.textContent = 'AC'
//         }
//         display.textContent = 0;
//         calculator.dataset.previousKeyType = 'clear';  
//     }
//     if (action !== 'clear') {
//         const clearButton = calculator.querySelector('[data-action=clear]')
//         clearButton.textContent = 'CE'
//     }
//     if (action === 'calculate') {
//         console.log('equal key!');
//         let firstValue = calculator.dataset.firstValue;
//         const operator = calculator.dataset.operator;
//         let secondValue = displayedNum;
//         calculator.dataset.previousKeyType = 'calculate'
//         const calculate = (n1, operator, n2) => {
//             let result = '';
//             const firstNum = parseFloat(n1);
//             const secondNum = parseFloat(n2);
//             if (operator === 'add') {
//                 return firstNum + secondNum;
//             } if (operator === 'subtract') {
//                 return firstNum - secondNum;
//             } if (operator === 'multiply') {
//                 return firstNum * secondNum;
//             } if (operator === 'divide') {
//                 return firstNum / secondNum;
//             }
//         }

//         if (firstValue) {
//             if (previousKeyType === 'calculate') {
//                 firstValue = displayedNum;
//                 secondValue = calculator.dataset.modValue;
//             }
//             display.textContent = calculate(firstValue, operator, secondValue)
//         }
//         calculator.dataset.modValue = secondValue;  
//         calculator.dataset.previousKeyType = 'calculate'
//     }
//     Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
//  }
// })
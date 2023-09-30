const displayHistory = document.querySelector('.disp-history');
const displayInput = document.querySelector('.disp-input');
const displayResult = document.querySelector('.disp-result');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const allClear = document.querySelector('.all-clear');
const lastClear = document.querySelector('.last-entity-clear');
const equal = document.querySelector('.equal');
const dot = document.querySelector('.dot');

let disNum1 = '';
let disNum2 = '';
let lastOperator = '';
let haveDot = false;
let result = null;

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        disNum2 += e.target.innerText;
        displayInput.innerText = disNum2;
    })
});

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        if (!disNum1) return;
        haveDot = false;
        const operatorValue = e.target.innerText;
        if (disNum1 && disNum2 && lastOperator) {
            mathOperator();
        } else {
            result = parseFloat(disNum2);
        }
        clearvar(operatorValue);
        lastOperator = operatorValue;
    })
})

function clearvar(name = '') {
    disNum1 += disNum2 + ' ' + name + ' ';
    displayHistory.innerText = disNum1;
    disNum2 = '';
    displayResult.innerText = result;
}
function mathOperator() {
    if (lastOperator === 'X') {
        result = parseFloat(result) * parseFloat(disNum2);
    } else if (lastOperator === '+') {
        result = parseFloat(result) + parseFloat(disNum2);
    } else if (lastOperator === '-') {
        result = parseFloat(result) - parseFloat(disNum2);
    } else if (lastOperator === '/') {
        result = parseFloat(result) / parseFloat(disNum2);
    } else if (lastOperator === '%') {
        result = parseFloat(result) % parseFloat(disNum2);
    }
    // displayResult.innerText = result;
}

equal.addEventListener('click', (e) => {
    if (!disNum1 || !disNum2) return;
    haveDot = false;
    mathOperator();
    clearvar();
    displayInput.innerText = result;
    // displayHistory.innerText = disNum1 + disNum2 + ' = ';
})
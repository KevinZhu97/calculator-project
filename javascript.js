function sum(a, b) {
    return (a + b);
};

function subtract(a, b) {
    return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b);
};

function operate(pop, a, b) {
    return ((pop)(a, b));
};

//create functions that populate the display when you click the number buttons, store in 'display value' variable
const currentOperation = document.querySelector('.current-operation');
const lastOperation = document.querySelector('.last-operation');

// starting screen
let displayValue = 0;
currentOperation.innerHTML = displayValue

// give number button an eventlistener, delete 0 with substring
const allNumbers = document.querySelectorAll('.number');
allNumbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayValue += number.innerHTML;
        currentOperation.innerHTML = `${displayValue.substring(1)}`;
    });
});

let firstValue = 0;
let secondValue = '';
let symbol = '';

const allOperations = document.querySelectorAll('.operator');
allOperations.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (firstValue === 0) {
            firstValue = parseInt(currentOperation.innerHTML);
            symbol = operator.id;
            displayValue = 0;
        } else if (firstValue > 0) {
            secondValue = parseInt(currentOperation.innerHTML);
            currentOperation.innerHTML = operate(window[symbol], firstValue, secondValue);
            symbol = operator.id;
            firstValue = parseInt(currentOperation.innerHTML);
            displayValue = 0;
        };
    });
});

// window[variable] to call function with a variable 
const equals = document.querySelector('#equals');
equals.addEventListener('click', function() {
    secondValue = parseInt(displayValue);
    currentOperation.innerHTML = (operate(window[symbol], firstValue, secondValue));
    firstValue = (operate(window[symbol], firstValue, secondValue));
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    firstValue = 0;
    secondValue = 0;
    symbol = '';
    displayValue = 0;
    currentOperation.innerHTML = 0;
});

const erase = document.querySelector('#delete');
erase.addEventListener('click', () => {
    if (currentOperation.innerHTML.length > 1) {
        currentOperation.innerHTML = currentOperation.innerHTML.slice(0, -1);
    };
});




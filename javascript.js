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

// give number button an eventlistener
const allNumbers = document.querySelectorAll('.number');
allNumbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayValue += number.innerHTML;
        // delete the 0
        currentOperation.innerHTML = `${displayValue.substring(1)}`;
    });
});

// declare variable to use it later to store first 
// first value 0, in case user wants to sum righ off the bat? ***
let firstValue = 0;
let secondValue = '';
let symbol = '';

// how do i store all the values?
// what happens if she presses more than one number and operators, to add before the = sign
const allOperations = document.querySelectorAll('.operator');
allOperations.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (firstValue === 0) {
            firstValue = parseInt(currentOperation.innerHTML);
            console.log(firstValue);
            symbol = operator.id;
            console.log(symbol);
            displayValue = 0;
        } else if (firstValue > 0) {
            secondValue = parseInt(currentOperation.innerHTML);
            console.log(symbol);
            currentOperation.innerHTML = operate(window[symbol], firstValue, secondValue);
            symbol = operator.id;
            firstValue = parseInt(currentOperation.innerHTML);
            displayValue = 0;
        };
    });
});

//for some reason operator does not stay the same for the next block of code, it returns to
//its original value, got it solved: issue was due to variable shadowing

//uncaught type error, use window[variable] to call function with a variable 

const equals = document.querySelector('#equals');
equals.addEventListener('click', function() {
    secondValue = parseInt(displayValue);
    currentOperation.innerHTML = (operate(window[symbol], firstValue, secondValue));
    firstValue = (operate(window[symbol], firstValue, secondValue));
});

// add clear function
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    firstValue = 0;
    secondValue = '';
    symbol = '';
    currentOperation.innerHTML = 0;
});

// add delete function, get a hold of the display and edit it
const erase = document.querySelector('#delete');
erase.addEventListener('click', () => {
    if (currentOperation.innerHTML.length > 1) {
        currentOperation.innerHTML = currentOperation.innerHTML.slice(0, -1);
    };
});




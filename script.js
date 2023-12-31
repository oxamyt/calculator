
// add function
function add (firstValue, secondValue){   
 let result = +firstValue + +secondValue;
    currentValue = result;
    updateDisplay()
}

// subtract function
function subtract (firstValue, secondValue){
    let result = +firstValue - +secondValue;
    currentValue = result;
    updateDisplay()
}

// multiply function
function multiply (firstValue, secondValue){
    let result = +firstValue * +secondValue;
    currentValue = result;
    updateDisplay()
}

// divide function
function divide (firstValue, secondValue){
    if ( +secondValue === 0){
        currentValue = 'ERROR';
        updateDisplay()
    }
    else {
    let result = +firstValue / +secondValue;
    currentValue = result;
    updateDisplay()
    }
}

// operate function
function operate(a, operator, b){
if(operator == '+'){
    add(a, b);
}
else if(operator == '-'){
    subtract(a, b);
}
else if(operator == '*'){
    multiply(a, b);
}
else if(operator == '/'){
    divide(a,b);
}


firstValue = currentValue;
secondValue = "";
operator = "";
}

// variables
let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');
let value = document.querySelector('p');
let buttonOne = document.getElementById('one');
let buttonTwo = document.getElementById('two');
let buttonThree = document.getElementById('three');
let buttonFour = document.getElementById('four');
let buttonFive = document.getElementById('five');
let buttonSix = document.getElementById('six');
let buttonSeven = document.getElementById('seven');
let buttonEight = document.getElementById('eight');
let buttonNine = document.getElementById('nine');
let buttonZero = document.getElementById('zero');
let buttonAdd = document.getElementById('add');
let buttonSubtract = document.getElementById('subtract');
let buttonMultiply = document.getElementById('multiply');
let buttonDivide = document.getElementById('divide');
let buttonDot = document.getElementById('dot');
let buttonAC = document.getElementById('AC');
let buttonDEL = document.getElementById('DEL');
let buttonModular = document.getElementById('modular');
let buttonEqual = document.getElementById('equal');

// display values
let currentValue = '';
let firstValue = '';
let secondValue = '';
let operator = '';


// Clear ALL function
function clear(){
currentValue = '';
firstValue = '';
operator = '';
secondValue = '';
updateDisplay();
}

// DEL Undo function
function undo(){
    if (currentValue != ''){
        currentValue = currentValue.slice (0, -1);
        updateDisplay()

        if (operator){
            secondValue = secondValue.slice(0, -1);
        }
        else{
            firstValue = firstValue.slice(0, -1);
        }
    }
    
}

// displayValue function
function updateDisplay(){
    display.textContent = currentValue;
}



//calculation events
    buttonOne.addEventListener('click', function(){
    currentValue += '1';
    updateDisplay();
    if (operator){
        secondValue += '1';
    }
    else {
        firstValue += '1';
    }
    })
    buttonTwo.addEventListener('click', function(){
        currentValue += '2';
        updateDisplay();
        if (operator){
            secondValue += '2';
        }
        else {
            firstValue += '2';
        }
    })
    buttonThree.addEventListener('click', function(){
        currentValue += '3';
        updateDisplay();
            if (operator){
                secondValue += '3';
    }
    else {
        firstValue += '3';
    }
    })
    buttonFour.addEventListener('click', function(){
        currentValue += '4';
        updateDisplay();
        if (operator){
            secondValue += '4';
        }
        else {
            firstValue += '4';
        }
    })
    buttonFive.addEventListener('click', function(){
        currentValue += '5';
        updateDisplay();
        if (operator){
            secondValue += '5';
        }
        else {
            firstValue += '5';
        }
    })
    
    buttonSix.addEventListener('click', function(){
        currentValue += '6';
        updateDisplay();
        if (operator){
            secondValue += '6';
        }
        else {
            firstValue += '6';
        }
    })
    buttonSeven.addEventListener('click', function(){
        currentValue += '7';
        updateDisplay();
        if (operator){
            secondValue += '7';
        }
        else {
            firstValue += '7';
        }
    })
    buttonEight.addEventListener('click', function(){
        currentValue += '8';
        updateDisplay();
        if (operator){
            secondValue += '8';
        }
        else {
            firstValue += '8';
        }
    })
    buttonNine.addEventListener('click', function(){
        currentValue += '9';
        updateDisplay();
        if (operator){
            secondValue += '9';
        }
        else {
            firstValue += '9';
        }
    })
    buttonZero.addEventListener('click', function(){
        currentValue += '0';
        updateDisplay();
        if (operator){
            secondValue += '0';
        }
        else {
            firstValue += '0';
        }
    })
    buttonAdd.addEventListener('click', function(){
        if (firstValue && operator && secondValue){
            operate(firstValue, operator, secondValue);
            firstValue = currentValue;
            currentValue += '+';
            updateDisplay();
        }
        else{
        operator = '+';
        currentValue += '+';
        updateDisplay();
        }
    })
    buttonSubtract.addEventListener('click', function(){
        if (firstValue && operator && secondValue){
            operate(firstValue, operator, secondValue);
            firstValue = currentValue;
            currentValue += '-';
            updateDisplay();
        }
        else{
        operator = '-';
        currentValue += '-';
        updateDisplay();
        }
    })
    buttonMultiply.addEventListener('click', function(){
        if (firstValue && operator && secondValue){
            operate(firstValue, operator, secondValue);
            firstValue = currentValue;
            currentValue += 'x';
            updateDisplay();
        }
        else{
        operator = '*';
        currentValue += 'x';
        updateDisplay();
        }
    })
    buttonDivide.addEventListener('click', function(){
        if (firstValue && operator && secondValue){
            operate(firstValue, operator, secondValue);
            firstValue = currentValue;
            currentValue += '÷';
            updateDisplay();
        }
        else{
        operator = '/';
        currentValue += '÷';
        updateDisplay();
        }
    })

    buttonEqual.addEventListener('click', function(){
        if (firstValue && operator && secondValue){
            operate(firstValue, operator, secondValue);

        }
        firstValue = currentValue;
    })
    buttonAC.addEventListener('click', function(){
        clear();
    })

    buttonDEL.addEventListener('click', function(){
       undo();
    })
    buttonDot.addEventListener('click', function(){
        if (!currentValue.includes ('.')){
            currentValue += '.';
            updateDisplay();
        if (operator){
            secondValue += '.';
        }
        else{
            firstValue += '.';
        }
    }
    })

    // keyboard support
    document.addEventListener('keydown', function(event){
        switch(event.key){
            case '0':
                buttonZero.click();
                break;
            case '1':
                buttonOne.click();
                break;
            case '2':
                buttonTwo.click();
                break;
            case '3':
                buttonThree.click();
                break;
            case '4':
                buttonFour.click();
                break;            
            case '5':
                buttonFive.click();
                break;
            case '6':
                buttonSix.click();
                break;
            case '7':
                buttonSeven.click();
                break;
            case '8':
                buttonEight.click();
                break;
            case '9':
                buttonNine.click();
                break;
            case '+':
                buttonAdd.click();
                break;
            case '-':
                buttonSubtract.click();
                break;
            case '*':
                buttonMultiply.click();
                break;            
            case '/':
                buttonDivide.click();
                break;
            case '.':
                buttonDot.click();
                break;
            case '=':
                buttonEqual.click();
                break;
            case 'Enter':
                buttonEqual.click();
                break;
            case 'Backspace':
                buttonDEL.click();
                break;
            case 'Delete':
                buttonAC.click();
                break;
                
        }
    })
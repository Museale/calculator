let operator = '';
let firstNumber = '';
let secondNumber = '';
let result = '';
let activatedOperator = 0;
let activatedDecimalOnKeydown = false;

const operate = function (operator, number) {
    switch (true) {
        case (operator === '+') : return number.reduce((a,b) => a + b);
        break;
        case (operator === '/') : return number.reduce((a,b) => a / b);
        break;
        case (operator === '-') : return number.reduce((a,b) => a - b);
        break;
        case (operator === 'x') : return number.reduce((a,b) => a * b);
        break;
    }; 
};

const resultToFirstNumber = () => {
    operatorDisplayer.textContent = '';
    secondNumberDisplayer.textContent = '';
    secondNumber = '';
    firstNumber = result;
    numberDisplayer.textContent = result;
    return firstNumber;
};

const screen = document.getElementById('display');

const numberDisplayer = document.createElement('p');
    numberDisplayer.classList.add('clickedNum');

const secondNumberDisplayer = document.createElement('p');
    secondNumberDisplayer.classList.add('clickedNum');

const operatorDisplayer = document.createElement('p');
    operatorDisplayer.classList.add('clickedNum');

const AC = document.getElementById('ac');
    AC.addEventListener('click', () => deleteAll());
    document.body.addEventListener('keydown', e => e.key === 'Backspace' ? deleteAll() : false)

const deleteAll = function () {
    firstNumber = '';
    secondNumber = '';
    result = '';
    operator = '';
    activatedOperator = 0;
    numberDisplayer.textContent = '';
    secondNumberDisplayer.textContent =  '';
    operatorDisplayer.textContent = '';
};

const c = document.getElementById('c');
    c.addEventListener('click', () => {
        //NEEDS REWORK! NON FUNCTIONAL ON NUMBERS BIGGER THAN 2
    });
    
const number = document.querySelectorAll('.number');
    number.forEach(item => item.addEventListener('click', e => whichNumber(e)));

const whichNumber = function (e) {
    if (!activatedOperator && !result) {
        firstNumber += [e.target.textContent];
        numberDisplayer.textContent = firstNumber;
        return firstNumber;
        } else if (activatedOperator) {
            decimal.disabled = false;
            secondNumber += [e.target.textContent];
            secondNumberDisplayer.textContent = secondNumber;
            return secondNumber;
        }
        if (result) {
            firstNumber += [e.target.textContent];
            numberDisplayer.textContent = firstNumber;
            return firstNumber;
        }
}

document.body.addEventListener('keydown', e  => {
    switch (true) {
        case (e.key === '+'): {
            activatedOperator++;
            operatorDisplayer.textContent = '+';
            return operator = '+'
        };
        break;
        case (e.key === '-'): {
            activatedOperator++;
            operatorDisplayer.textContent = '-';
            return operator = '-';
        };
        break;
        case (e.key === '/'): {
            activatedOperator++;
            operatorDisplayer.textContent = '/';
            return operator = '/';
        };
        break;
        case (e.key === 'x'): {
            activatedOperator++;
            operatorDisplayer.textContent = 'x';
            return operator = 'x';
        };
        break;
    }
});

const operators = document.querySelectorAll('.operator');
    operators.forEach(item =>
        item.addEventListener('click', e => {
            determineOperatorBtn(e);
            
}));   

const determineOperatorBtn = function (e) {
    if (!firstNumber && e.target.textContent == '-') {  
        firstNumber = '-';
        numberDisplayer.textContent = firstNumber;  
        return firstNumber;
    }
    if (!secondNumber && e.target.textContent == '-') {  
        secondNumber = '-';
        secondNumberDisplayer.textContent = secondNumber;  
        return secondNumber;
    }
    if (!activatedOperator && firstNumber) {
        activatedOperator++;
        operator = e.target.textContent; 
        operatorDisplayer.textContent = operator;  
        } else if (activatedOperator && secondNumber) {
           calculate();
           operator = e.target.textContent;
           operatorDisplayer.textContent = operator;
        } else if (result) {
            operator = e.target.textContent;
           operatorDisplayer.textContent = operator;
        }
    return operator;
}

const decimal = document.getElementById('decimal'); 
    decimal.addEventListener('click', () => decimal.disabled = true);
        
const equals = document.getElementById('equal');
    equals.addEventListener('click', () => calculate());

const calculate = () => {
    let number = [firstNumber, secondNumber];
     number = number.map(n => parseFloat(n));
        if (operator == '/' && secondNumber == 0) {
            numberDisplayer.textContent = 'Why do you hate me?'
            secondNumberDisplayer.textContent = '';
            operatorDisplayer.textContent = '';
            return 'You son of a bitch';
        } 
        if (!secondNumber) {
            numberDisplayer.textContent = firstNumber;
        } else {
        result = operate(operator, number);
        result = Math.round(result * 100) / 100;
        resultToFirstNumber();
     return result;
     }
};

document.body.addEventListener('keydown', e => {

    let numberKey = Number(e.key);
  
    if (e.key === "Enter") {
        return calculate();
    };
        if (e.key === '.' && !activatedDecimalOnKeydown) { 
            firstNumber += '.';
            activatedDecimalOnKeydown = true;
            return firstNumber;
        
        } else if (e.key === '.' && activatedDecimalOnKeydown) {
            e.preventDefault();     
           return activatedDecimalOnKeydown = false;
            
        }

    if (!isNaN(numberKey)) {
        if (!activatedOperator && !result) {
            numberDisplayer.textContent += e.key;
            firstNumber += [e.key];
         return firstNumber;
         } else if (activatedOperator) {
             secondNumberDisplayer.textContent += e.key;
             secondNumber += [e.key];  
        return secondNumber;
        } 
     
        };
});

screen.appendChild(secondNumberDisplayer);
screen.appendChild(operatorDisplayer);
screen.appendChild(numberDisplayer);


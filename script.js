const screen = document.getElementById('display');

const numberDisplayer = document.createElement('p');
    numberDisplayer.classList.add('clickedNum');

const secondNumberDisplayer = document.createElement('p');
    secondNumberDisplayer.classList.add('clickedNum');

const operatorDisplayer = document.createElement('p');
    operatorDisplayer.classList.add('clickedNum');

//Global variables
let operator = '';
let firstNumber = '';
let secondNumber = '';
let result = '';
let activatedOperator = 0;
let activatedDecimalOnKeydown = false;

const operate = function (operator, number) {
    //excecutes the mathematical operations
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

const AC = document.getElementById('ac');
    AC.addEventListener('click', () => deleteAll());
    document.body.addEventListener('keydown', e => e.key === 'Backspace' ? deleteAll() : false)


const c = document.getElementById('c');
    c.addEventListener('click', () => {
        if (!secondNumber && !operator) {
           firstNumber = firstNumber.substring(0, firstNumber.length -1);
           numberDisplayer.textContent = firstNumber;
           return firstNumber;
        };
        if (operator && !secondNumber) {
            operator = '';
            operatorDisplayer.textContent = '';
            return operator;
        };
        if (secondNumber) {
            secondNumber = secondNumber.substring(0, secondNumber.length -1);
            secondNumberDisplayer.textContent = secondNumber;
            return secondNumber;
        };
    });
    
const number = document.querySelectorAll('.number');
    number.forEach(item => item.addEventListener('click', e => whichNumber(e)));

const whichNumber = function (e) {
    //determines what number you clicked and adds to correct sum
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

const deleteAll = function () {
    firstNumber = '';
    secondNumber = '';
    result = '';
    operator = '';
    activatedOperator = 0;
    activatedDecimalOnKeydown = false;
    numberDisplayer.textContent = '';
    secondNumberDisplayer.textContent =  '';
    operatorDisplayer.textContent = '';

};

document.body.addEventListener('keydown', e  => {
    //returns what operator you pressed on keydown event 
    switch (true) {
        case (e.key === '+'): {
            activatedOperator++;
            activatedDecimalOnKeydown = false;
            operatorDisplayer.textContent = '+';
            return operator = '+'
        };
        break;
        case (e.key === '-'): {
            if (!firstNumber) {
                numberDisplayer.textContent = '-';
                return firstNumber = '-';
            }
            if (firstNumber && !secondNumber) {
                secondNumberDisplayer.textContent = '-';
                return secondNumber = '-';
            }
            activatedOperator++;
            activatedDecimalOnKeydown = false;
            operatorDisplayer.textContent = '-';
            return operator = '-';
        };
        break;
        case (e.key === '/'): {
            activatedOperator++;
            activatedDecimalOnKeydown = false;
            operatorDisplayer.textContent = '/';
            return operator = '/';
        };
        break;
        case (e.key === 'x'): {
            activatedOperator++;
            activatedDecimalOnKeydown = false;
            operatorDisplayer.textContent = 'x';
            return operator = 'x';
        };
        break;
        case (e.key === '.'): {
            if (!secondNumber && !operator && !activatedDecimalOnKeydown) {
                firstNumber += '.';
                activatedDecimalOnKeydown = true;
                numberDisplayer.textContent = firstNumber;
                return firstNumber;
            }
            if (operator && !activatedDecimalOnKeydown) {
                secondNumber += '.';
                activatedDecimalOnKeydown = true;
                secondNumberDisplayer.textContent = secondNumber;
                return secondNumber;
            }
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
    activatedDecimalOnKeydown = false;
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
    document.body.addEventListener('keydown', e => {
        if (e.key === "Enter") {
           calculate();
           return result;
        }
    });

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
    //determines what number you pressed on keydown event and adds
    // aid number to correct sum
    let numberKey = Number(e.key);
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


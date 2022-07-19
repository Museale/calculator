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

//excecutes the mathematical operations
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

const AC = document.getElementById('ac');
    AC.addEventListener('click', () => deleteAll());
    document.body.addEventListener('keydown', e => e.key === 'Delete' ? deleteAll() : false);

const c = document.getElementById('c');
    c.addEventListener('click', () => backspace());
    document.body.addEventListener('keydown', e => e.key === 'Backspace' ? backspace() : false);

const backspace = () => {
    if (!firstNumber) {
        deleteAll();
    } else if (!operator) {
        firstNumber = firstNumber.substring(0, firstNumber.length -1);
        numberDisplayer.textContent = firstNumber;
        return firstNumber;
    } else if (operator && !secondNumber) {
         operator = '';
         operatorDisplayer.textContent = '';
         return operator;
     } else if (secondNumber) {
         secondNumber = secondNumber.substring(0, secondNumber.length -1);
         secondNumberDisplayer.textContent = secondNumber;
         return secondNumber;
     };
     
}
    
const number = document.querySelectorAll('.number');
    number.forEach(item => item.addEventListener('click', e => addNumber(e)));
    document.body.addEventListener('keydown', e => {
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

const addNumber = e => {
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
};

const deleteAll = () => {
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

const operators = document.querySelectorAll('.operator');
    operators.forEach(item => item.addEventListener('click', e => determineOperatorBtn(e)));  

    const determineOperatorBtn = e => {
        activatedDecimalOnKeydown = false;
        if (!firstNumber && e.target.textContent == '-') {  
            firstNumber = '-';
            numberDisplayer.textContent = firstNumber;  
            return firstNumber;
        }
        if (!secondNumber && e.target.textContent == '-' && operator) {  
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
    };

    document.body.addEventListener('keydown', e  => {
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
                if (firstNumber && operator && !secondNumber) {
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
                operatorDisplayer.textContent = '÷';
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
                } else if (operator && !activatedDecimalOnKeydown) {
                    secondNumber += '.';
                    activatedDecimalOnKeydown = true;
                    secondNumberDisplayer.textContent = secondNumber;
                    return secondNumber;
                }
            };
            break;
        }
    });

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
            deleteAll();
            numberDisplayer.textContent = 'Why are you like that?'
            return;
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

screen.appendChild(secondNumberDisplayer);
screen.appendChild(operatorDisplayer);
screen.appendChild(numberDisplayer);


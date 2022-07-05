let operator = '';
let firstNumber = '';
let secondNumber = '';
let result = '';
let activatedOperator = 0;
let activatedDecimal = 0;

const operate = function (operator, number) {
    switch (true) {
        case (operator === '+' ) : return result  = number.reduce((a,b) => a + b);
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
    AC.addEventListener('click', () => {
        firstNumber = '';
        secondNumber = '';
        result = '';
        operator = '';
        activatedOperator = 0;
        numberDisplayer.textContent = '';
        secondNumberDisplayer.textContent =  '';
        operatorDisplayer.textContent = '';
       
});

const c = document.getElementById('c');
    c.addEventListener('click', e => {
        if (secondNumber) {
            secondNumber = Array.from(secondNumber);
            secondNumber.pop();
            secondNumberDisplayer.textContent = secondNumber;
            console.log(secondNumber)
            return secondNumber;
        }
        if (!secondNumber && operator) {
            operator = '';
            activatedOperator--;
            operatorDisplayer.textContent = '';
            return operator;
        }
        if (!secondNumber && !operator) {
            firstNumber = Array.from(firstNumber);
            firstNumber.pop();
            numberDisplayer.textContent = firstNumber;
            return firstNumber;
        }
     
        });
    
const number = document.querySelectorAll('.number');
    number.forEach(item => 
    item.addEventListener('click', e => {
        if (!activatedOperator && !result) {
       numberDisplayer.textContent += e.target.textContent;
        firstNumber += [Number(e.target.textContent)];
        console.log(firstNumber, 'first at numbers')
        return firstNumber;
        } else if (activatedOperator) {
            decimal.disabled = false;
            secondNumberDisplayer.textContent += e.target.textContent;
            secondNumber += [Number(e.target.textContent)];
            console.log(secondNumber, 'second at numbers');
            return secondNumber;
        }
}));

const operators = document.querySelectorAll('.operator');
    operators.forEach(item =>
        item.addEventListener('click', e => {
            if (!activatedOperator) {
            activatedOperator++;
            operator = e.target.textContent;  
            operatorDisplayer.textContent = operator;  
            } else if (activatedOperator && secondNumber) {
               calculate();
               operator = e.target.textContent;  
               operatorDisplayer.textContent = operator;
            } else {
                operator = e.target.textContent;  
                operatorDisplayer.textContent = operator;
            }
        return operator;
})); 

const decimal = document.getElementById('decimal'); 
    decimal.addEventListener('click', () => decimal.disabled = true);a

const equals = document.getElementById('equal');
    equals.addEventListener('click', () => {
     calculate();
});

const calculate = () => {
    let number = [firstNumber, secondNumber];
     number = number.map(n => parseInt(n));
     if (operator == '/' && secondNumber == 0) {
        numberDisplayer.textContent = 'Why do you hate me?'
        secondNumberDisplayer.textContent = '';
        operatorDisplayer.textContent = '';
        return 'You son of a bitch' ;
     } else {
     result = operate(operator, number);
     resultToFirstNumber();
    
     return result;
     }
};

screen.appendChild(secondNumberDisplayer);
screen.appendChild(operatorDisplayer);
screen.appendChild(numberDisplayer);


let operator = '';
let firstNumber = '';
let secondNumber = '';
let result = '';
let activatedOperator = 0;

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
        let allNumbers = [...firstNumber, operator, ...secondNumber];
        console.log(allNumbers)
        console.log(allNumbers.splice(allNumbers.length - 1 , 1));
        console.log(allNumbers
            )
        console.log(firstNumber, 'first')
        console.log(secondNumber, 'second')
        console.log(operator, 'op')

        });
    
        // It should check wether secondNumD has a length
        //It should pop the last eleemnt of SND
        

        //if SecondNumD does not have a length it shuld delete the operator if operator is true

        //if operator is not true it should delete the last element of FirstNum

    
    
const number = document.querySelectorAll('.number');
    number.forEach(item => 
    item.addEventListener('click', e => {
        if (!activatedOperator && !result) {
       numberDisplayer.textContent += e.target.textContent;
        firstNumber += [Number(e.target.textContent)];
        console.log(firstNumber, 'first at numbers')
        return firstNumber;
        } else if (activatedOperator) {
            secondNumberDisplayer.textContent += e.target.textContent;
            secondNumber += [Number(e.target.textContent)];
            console.log(secondNumber, 'second at numbers')
            return secondNumber;
        }
}));

const operators = document.querySelectorAll('.operator');
    operators.forEach(item =>
        item.addEventListener('click', e => {
            activatedOperator++;
            operator = e.target.textContent;  
            operatorDisplayer.textContent = operator;   
        return operator;
            
})); 


const equals = document.getElementById('equal');
    equals.addEventListener('click', () => {
     let number = [firstNumber, secondNumber];
     number = number.map(n => parseInt(n));
     result = operate(operator, number);
     resultToFirstNumber();
     return result;
});

screen.appendChild(secondNumberDisplayer);
screen.appendChild(operatorDisplayer);
screen.appendChild(numberDisplayer);


const addition = document.getElementById('add');
    addition.addEventListener('click', () => 
        (number) => number.reduce((a,b) => a + b));
      
const division = document.getElementById('divide');
    division.addEventListener('click', () => 
        (number) => number.reduce((a,b) => a / b));
    
const subtraction = document.getElementById('subtract');
    subtraction.addEventListener('click', () => 
        (number) => number.reduce((a,b) => a - b));
    
const multiplication = document.getElementById('multiply');
    multiplication.addEventListener('click', () => 
        (number) => number.reduce((a,b) => a * b));

       
const operate = function (operator, ...sum) {
    switch (true) {
        case (operator === addition) : addition(sum);
        break;
        case (operator === division) : division(sum);
        break;
        case (operator === subtraction) : subtraction(sum);
        break;
        case (operator === multiplication) : multiplication(sum);
        break;
    };
};

let operator = '';

let activatedOperator = 0;

let firstSum = 0;

let secondSum = 0;

const screen = document.getElementById('display');

const numberDisplayer = document.createElement('p');
    numberDisplayer.classList.add('clickedNum');

const secondNumberDisplayer = document.createElement('p');
    secondNumberDisplayer.classList.add('clickedNum');

const operatorDisplayer = document.createElement('p');
    operatorDisplayer.classList.add('clickedNum');

const AC = document.getElementById('ac');
    AC.addEventListener('click', e => {
        numberDisplayer.textContent = '';
        operatorDisplayer.textContent = '';
});
    
const number = document.querySelectorAll('.number');
    number.forEach(item => 
    item.addEventListener('click', e => {
        if (operator < 1) {
       numberDisplayer.textContent += e.target.textContent;
        firstSum = Number(e.target.textContent);
        console.log(firstSum)
        return firstSum;
        } else {
            secondNumberDisplayer.textContent += e.target.textContent;
            secondSum += e.target.textContent;
            return secondSum;
        }    
}));

const operators = document.querySelectorAll('.operator');
    
            console.log(firstSum, 'isgreaterthan')
        operators.forEach(item =>
         item.addEventListener('click', e => {
            activatedOperator++;
            operator = e.target.textContent;  
            operatorDisplayer.textContent = operator;
        return operator;
         
})); 



const equals = document.getElementById('equal');
    equals.addEventListener('click', e => {
       
        numberDisplayer.textContent = '';
        operatorDisplayer.textContent = '';
        secondNumberDisplayer.textContent = '';
        activatedOperator--;
        console.log(operator)
        let total = operate(operator, firstSum);
        numberDisplayer.textContent = total;
        console.log(total)
    
});




screen.appendChild(secondNumberDisplayer);
screen.appendChild(operatorDisplayer);
screen.appendChild(numberDisplayer);


const addition = (number) => number.reduce((a,b) => a + b);

const division = (number) => number.reduce((a,b) => a / b);

const subtraction = (number) => number.reduce((a,b) => a - b);

const multiplication = (number) => number.reduce((a,b) => a * b);

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
        firstSum += e.target.textContent;
        console.log(firstSum)
        return firstSum;
        } else {
            secondNumberDisplayer.textContent += e.target.textContent;
            secondSum += e.target.textContent;
            return secondSum;
        }
       
}));

const operators = document.querySelectorAll('.operator');
   
//     operators.forEach(item =>
//          item.addEventListener('click', e => {
//             operator++;
//             operatorDisplayer.textContent = e.target.textContent;  
//             operator = e.target.textContent;
//             console.log(operator);
//         return operator;
         
// })); 
    


const equals = document.getElementById('equal');
    equals.addEventListener('click', e => {
       
        numberDisplayer.textContent = '';
        operatorDisplayer.textContent = '';
        secondNumberDisplayer.textContent = '';
        operator--;
        operator = e.target.textContent;
        console.log(operator)
        let total = operate(operator, firstSum);
        numberDisplayer.textContent = total;
        console.log(total)
    
});




screen.appendChild(secondNumberDisplayer);
screen.appendChild(operatorDisplayer);
screen.appendChild(numberDisplayer);


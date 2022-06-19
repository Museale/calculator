const addition = (number) => number.reduce((a,b) => a + b);

const division = (number) => number.reduce((a,b) => a / b);

const subtraction = (number) => number.reduce((a,b) => a - b);

const multiplication = (number) => number.reduce((a,b) => a * b);

const operate = function (operator, ...sum) {
    //The function should take an operator and two numbers as arguments
    //It should then call the chosen of the above functions on the numbers
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
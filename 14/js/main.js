// Task 01

function displayMethodsOfUse() {
    const MethodsOfUse = `Вбудований JavaScript або посилання на зовнішній файл`;
    console.log(MethodsOfUse);
}

// Task 02

function variableNames() {
    console.log(`const firstName = 'Алєг';
const lastName = 'Плаче';
const fullName = firstName + " " + lastName;
const currentUserName = 'Арсен';

/*
let bad-example;
let bad_example;
let 4badExample;
let Badexample;
let BAD EXAMPLE;
let let;
*/`);
}

// Task 03

function typesOfComments() {
    console.log(`First: //
Second: 
/*
some text
*/ `)
}

// Task 04

function displayNamingStyles() {
    const namingStyles = `kebab-case, camelCase, screaming_snake, PascalCase, UPPER_SCREAMING_SNAKE`;
    console.log(namingStyles);
}

// Task 05

function checkUserName() {
    let userName = prompt(`Please enter your name:`);

    if (userName && userName.length  && userName.length >= 3) {
        let greeting = `Hello, ${userName} !`;
        console.log(greeting);
    } else {
        console.log(`You did not enter a name. Please try again.`);
    }
}

// Task 06 

function checkUserAge() {
    const userBirthday = parseInt(prompt(`Please indicate your year of birth`));

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    if(!isNaN(userBirthday)) {

        if(currentYear < userBirthday) {
            console.log(`You have not been born yet!`);
        } else {
            const userAge = currentYear - userBirthday;
            console.log(userAge);
        }
    } else {
        console.log(`Enter the correct year of birth`);
        checkUserAge();
    }
}

// Task 07 

function calculateSquarePerimeter() {
    const sideLength = parseInt(prompt(`Please specify the length of the square side:`));

    if (!isNaN(sideLength)) {
        const squarePerimeter = sideLength * 4;
        console.log(squarePerimeter);
    } else {
        console.log(`Please enter the correct number`)
    }
}

// Task 08 

function calculateCircleArea() {
    const circleRadium = parseInt(prompt(`Please specify the radius of the circle:`));

    if(!isNaN(circleRadium)) {
        const circleArea = Math.PI * Math.pow(circleRadium, 2);
        console.log(circleArea);
    } else {
        console.log(`Please specify the correct radius of the circle`)
    }
}

// Task 09

function calculateSpeed() {
    const distance = parseInt(prompt(`Please enter the distance between the two cities in kilometers:`));

    if(isNaN(distance) || distance <= 0) {
        console.log(`Please enter the correct distance.`);
    } else {
        const time = parseFloat(prompt(`Please enter how many hours you want to get there in:`));

        if(isNaN(time) || time <= 0) {
            console.log(`Please enter the correct time`);
        } else {
            const speed = distance / time;

            console.log(speed)
        }
    } 
}

// Task 10

function currencyConverter() {
    const exchangeRate = 0.93;

    const dollars = parseFloat(prompt(`Please specify the number of dollars:`));

    if (isNaN(dollars) || dollars <= 0) {
        console.log(`Please enter the correct dollar amount`);
    } else {
        const euros = dollars * exchangeRate;

        console.log(`${dollars} dollars equals ${euros} euro`)
    }
}

// Task 11

function roundedResult() {
    let result = 0.1 + 0.2;
    result = Math.round(result * 10) / 10;
    console.log(result);
}

// Task 12

function addStringAndNumber() {
    const strNumber = "1";
    const number = 2;

    const sum = +strNumber + number;
    console.log(sum);
}

// Task 13

function countFilesInCapacity() {

    const gigabite = 1024;
    const flashDriveSize = parseInt(prompt(`Please specify the size of the flash drive in GB:`));
    
    if (isNaN(flashDriveSize) || flashDriveSize <= 0) {
        console.log(`Please specify the correct size`);
    } else {
        const countFiles = flashDriveSize * gigabite / 820;
        console.log(`${Math.floor(countFiles)} files will fit in a ${flashDriveSize} GB flash drive`)
    }
}

// Task 14

function calculateChocolatePurchase() {

    const sumMoney = parseFloat(prompt(`How much money is in your wallet:`));
    
    if (isNaN(sumMoney) || sumMoney <= 0) {
        console.log(`Please enter the correct amount of money`);
    } else {
        const costChocolate = parseFloat(prompt(`How much is one chocolate bar:`));

        if (isNaN(costChocolate) || costChocolate <= 0) {
            console.log(`Please enter the correct price of the chocolate bar`);
        } else {
            const availableChocolateBars = sumMoney / costChocolate;
            console.log(`You can buy ${Math.floor(availableChocolateBars)} chocolates`)
        }
    }
}

// Task 15

function reverseNumber() {

    const number = parseInt(prompt(`Please enter a three-digit number:`))

    if (isNaN(number) || number < 100 || number > 999) {
        console.log(`Invalid number`);
    } else {
        var ones = number % 10;
        var tens = Math.floor((number % 100) / 10);
        var hundreds = Math.floor(number / 100);
        
        var reversedNumber = ones * 100 + tens * 10 + hundreds;
        console.log(`The number is backwards: ${reversedNumber}`);
    }
}

// Task 16

function depositInterest() {
    const depositAmountInput = prompt('Enter the amount of your bank deposit (in USD):');

    if (!isNaN(depositAmountInput) && parseFloat(depositAmountInput) >= 0) {
        const depositAmount = parseFloat(depositAmountInput);

        const annualInterestRate = 5;
        const numberOfMonths = 2;
        const monthlyInterestRate = (annualInterestRate / 100) / 12;
        const interestAmount = (depositAmount * monthlyInterestRate * numberOfMonths);

        console.log(`The amount of accrued interest: $${interestAmount.toFixed(2)}`);
    } else {
        console.log('Invalid input. Please enter a positive deposit amount in USD.');
    }
}

// Task 17

function returnExpression() {
    const firstExpression = 2 && 0 && 3;
    console.log(`First expression will return: ${firstExpression}.`);

    const secondExpression = 2 || 0 || 3;
    console.log(`Second expression will return: ${secondExpression}.`);

    const thirdExpression = 2 && 0 || 3;
    console.log(`Third expression will return: ${thirdExpression}.`);
}



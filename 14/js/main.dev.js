"use strict";

// Task 01
function displayMethodsOfUse() {
  var MethodsOfUse = "\u0412\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 JavaScript \u0430\u0431\u043E \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u0444\u0430\u0439\u043B";
  console.log(MethodsOfUse);
} // Task 02


function variableNames() {
  console.log("const firstName = '\u0410\u043B\u0454\u0433';\nconst lastName = '\u041F\u043B\u0430\u0447\u0435';\nconst fullName = firstName + \" \" + lastName;\nconst currentUserName = '\u0410\u0440\u0441\u0435\u043D';\n\n/*\nlet bad-example;\nlet bad_example;\nlet 4badExample;\nlet Badexample;\nlet BAD EXAMPLE;\nlet let;\n*/");
} // Task 03


function typesOfComments() {
  console.log("First: //\nSecond: \n/*\nsome text\n*/ ");
} // Task 04


function displayNamingStyles() {
  var namingStyles = "kebab-case, camelCase, screaming_snake, PascalCase, UPPER_SCREAMING_SNAKE";
  console.log(namingStyles);
} // Task 05


function checkUserName() {
  var userName = prompt("Please enter your name:");

  if (userName && userName.length && userName.length >= 3) {
    var greeting = "Hello, ".concat(userName, " !");
    console.log(greeting);
  } else {
    console.log("You did not enter a name. Please try again.");
  }
} // Task 06 


function checkUserAge() {
  var userBirthday = parseInt(prompt("Please indicate your year of birth"));
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  if (!isNaN(userBirthday)) {
    if (currentYear < userBirthday) {
      console.log("You have not been born yet!");
    } else {
      var userAge = currentYear - userBirthday;
      console.log(userAge);
    }
  } else {
    console.log("Enter the correct year of birth");
    checkUserAge();
  }
} // Task 07 


function calculateSquarePerimeter() {
  var sideLength = parseInt(prompt("Please specify the length of the square side:"));

  if (!isNaN(sideLength)) {
    var squarePerimeter = sideLength * 4;
    console.log(squarePerimeter);
  } else {
    console.log("Please enter the correct number");
  }
} // Task 08 


function calculateCircleArea() {
  var circleRadium = parseInt(prompt("Please specify the radius of the circle:"));

  if (!isNaN(circleRadium)) {
    var circleArea = Math.PI * Math.pow(circleRadium, 2);
    console.log(circleArea);
  } else {
    console.log("Please specify the correct radius of the circle");
  }
} // Task 09


function calculateSpeed() {
  var distance = parseInt(prompt("Please enter the distance between the two cities in kilometers:"));

  if (isNaN(distance) || distance <= 0) {
    console.log("Please enter the correct distance.");
  } else {
    var time = parseFloat(prompt("Please enter how many hours you want to get there in:"));

    if (isNaN(time) || time <= 0) {
      console.log("Please enter the correct time");
    } else {
      var speed = distance / time;
      console.log(speed);
    }
  }
} // Task 10


function currencyConverter() {
  var exchangeRate = 0.93;
  var dollars = parseFloat(prompt("Please specify the number of dollars:"));

  if (isNaN(dollars) || dollars <= 0) {
    console.log("Please enter the correct dollar amount");
  } else {
    var euros = dollars * exchangeRate;
    console.log("".concat(dollars, " dollars equals ").concat(euros, " euro"));
  }
} // Task 11


function roundedResult() {
  var result = 0.1 + 0.2;
  result = Math.round(result * 10) / 10;
  console.log(result);
} // Task 12


function addStringAndNumber() {
  var strNumber = "1";
  var number = 2;
  var sum = +strNumber + number;
  console.log(sum);
} // Task 13


function countFilesInCapacity() {
  var gigabite = 1024;
  var flashDriveSize = parseInt(prompt("Please specify the size of the flash drive in GB:"));

  if (isNaN(flashDriveSize) || flashDriveSize <= 0) {
    console.log("Please specify the correct size");
  } else {
    var countFiles = flashDriveSize * gigabite / 820;
    console.log("".concat(Math.floor(countFiles), " files will fit in a ").concat(flashDriveSize, " GB flash drive"));
  }
} // Task 14


function calculateChocolatePurchase() {
  var sumMoney = parseFloat(prompt("How much money is in your wallet:"));

  if (isNaN(sumMoney) || sumMoney <= 0) {
    console.log("Please enter the correct amount of money");
  } else {
    var costChocolate = parseFloat(prompt("How much is one chocolate bar:"));

    if (isNaN(costChocolate) || costChocolate <= 0) {
      console.log("Please enter the correct price of the chocolate bar");
    } else {
      var availableChocolateBars = sumMoney / costChocolate;
      console.log("You can buy ".concat(Math.floor(availableChocolateBars), " chocolates"));
    }
  }
} // Task 15


function reverseNumber() {
  var number = parseInt(prompt("Please enter a three-digit number:"));

  if (isNaN(number) || number < 100 || number > 999) {
    console.log("Invalid number");
  } else {
    var ones = number % 10;
    var tens = Math.floor(number % 100 / 10);
    var hundreds = Math.floor(number / 100);
    var reversedNumber = ones * 100 + tens * 10 + hundreds;
    console.log("The number is backwards: ".concat(reversedNumber));
  }
} // Task 16


function depositInterest() {
  var depositAmountInput = prompt('Enter the amount of your bank deposit (in USD):');

  if (!isNaN(depositAmountInput) && parseFloat(depositAmountInput) >= 0) {
    var depositAmount = parseFloat(depositAmountInput);
    var annualInterestRate = 5;
    var numberOfMonths = 2;
    var monthlyInterestRate = annualInterestRate / 100 / 12;
    var interestAmount = depositAmount * monthlyInterestRate * numberOfMonths;
    console.log("The amount of accrued interest: $".concat(interestAmount.toFixed(2)));
  } else {
    console.log('Invalid input. Please enter a positive deposit amount in USD.');
  }
} // Task 17


function returnExpression() {
  var firstExpression = 2 && 0 && 3;
  console.log("First expression will return: ".concat(firstExpression, "."));
  var secondExpression = 2 || 0 || 3;
  console.log("Second expression will return: ".concat(secondExpression, "."));
  var thirdExpression = 2 && 0 || 3;
  console.log("Third expression will return: ".concat(thirdExpression, "."));
}
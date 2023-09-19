"use strict";

// Task 01
function displayUserAge() {
  while (true) {
    var userAge = parseInt(prompt('Enter your age'));

    if (userAge === null) {
      console.log("canceled");
      break;
    }

    if (!isNaN(userAge)) {
      if (userAge < 0) {
        console.log("Age cannot be a negative number");
      } else if (userAge <= 11) {
        console.log("You are a child");
      } else if (userAge >= 12 && userAge <= 17) {
        console.log("You are a teenager");
      } else if (userAge >= 18 && userAge <= 59) {
        console.log("You are an adult");
      } else {
        console.log("You are a pensioner");
      }

      break;
    } else {
      console.log("Please enter the correct number for your age");
    }
  }
} // Task 02


function displaySpecialSymbol() {
  var userInput = prompt("Please enter a number between 0 and 9:");
  var number = parseInt(userInput);

  if (!isNaN(number) && number >= 0 && number <= 9) {
    var specialChar;

    switch (number) {
      case 0:
        specialChar = ")";
        break;

      case 1:
        specialChar = "!";
        break;

      case 2:
        specialChar = "@";
        break;

      case 3:
        specialChar = "#";
        break;

      case 4:
        specialChar = "$";
        break;

      case 5:
        specialChar = "%";
        break;

      case 6:
        specialChar = "^";
        break;

      case 7:
        specialChar = "&";
        break;

      case 8:
        specialChar = "*";
        break;

      case 9:
        specialChar = "(";
        break;
    }

    console.log("Special character for a number ".concat(number, " - ").concat(specialChar));
  } else {
    console.log("An invalid number has been entered. Please enter a number between 0 and 9.");
  }
} // Task 03


function displaySumNumbers() {
  var startNumber = parseInt(prompt("Enter the starting number of the range:"));
  var endNumber = parseInt(prompt("Enter the ending number of the range:"));

  if (!isNaN(startNumber) && !isNaN(endNumber)) {
    var sum = 0;

    if (startNumber <= endNumber) {
      for (var i = startNumber; i <= endNumber; i++) {
        sum += i;
      }
    } else {
      for (var _i = endNumber; _i <= startNumber; _i++) {
        sum += _i;
      }
    }

    console.log("The sum of the numbers in the range from ".concat(startNumber, " to ").concat(endNumber, " is ").concat(sum));
  } else {
    console.log("Please enter the correct numbers for the starting and ending values of the range");
  }
} // Task 04


function displayCommonDivisor() {
  var num1 = parseInt(prompt("Enter the first number:"));
  var num2 = parseInt(prompt("Enter the second number:"));

  if (!isNaN(num1) && !isNaN(num2)) {
    var a = Math.abs(num1);
    var b = Math.abs(num2);

    while (b) {
      var remainder = a % b;
      a = b;
      b = remainder;
    }

    alert("The greatest common divisor of ".concat(num1, " and ").concat(num2, " is ").concat(a));
  } else {
    alert("Please enter the correct numbers");
  }
} // Task 05


function displayAllDivisors() {
  var number = parseInt(prompt("Enter a number:"));

  if (!isNaN(number)) {
    var divisors = [];

    for (var i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }

    console.log("The divisors of the number ".concat(number, " are: ").concat(divisors.join(', ')));
  } else {
    console.log("Please enter a valid number.");
  }
} // Task 06


function displayPalindrom() {
  var number = prompt("Enter a five-digit number:");

  for (var i = 0; i < number.length; i++) {
    if (number[i] !== number[number.length - 1 - i]) {
      console.log("not equal");
      return false;
    } else {
      console.log("equal");
    }
  }
} // Task 07


function displayPaymentAmount() {
  var purchaseAmount = parseFloat(prompt("Enter the purchase amount:"));

  if (!isNaN(purchaseAmount)) {
    var discount = 0;

    if (purchaseAmount >= 200 && purchaseAmount < 300) {
      discount = 0.03;
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
      discount = 0.05;
    } else if (purchaseAmount >= 500) {
      discount = 0.07;
    }

    var discountedAmount = purchaseAmount - purchaseAmount * discount;
    console.log("The amount to be paid at a discount: $".concat(discountedAmount.toFixed(2)));
  } else {
    console.log("Please enter the correct purchase amount.");
  }
} // Task 08


function calculateStatistics() {
  var positiveCount = 0;
  var negativeCount = 0;
  var zeroCount = 0;
  var evenCount = 0;
  var oddCount = 0;

  for (var i = 0; i < 10; i++) {
    var userInput = parseInt(prompt("Enter a number:"));

    if (isNaN(userInput)) {
      console.log("You entered a non-number. Please enter a number.");
      i--;
      continue;
    }

    if (userInput > 0) {
      positiveCount++;
    } else if (userInput < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }

    if (userInput % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  console.log("Positive numbers: " + positiveCount);
  console.log("Negative numbers: " + negativeCount);
  console.log("Zeros: " + zeroCount);
  console.log("Even numbers: " + evenCount);
  console.log("Odd numbers: " + oddCount);
} // Task 09


function displayDaysOfWeek() {
  var dayIndex = 0;

  while (true) {
    var day = void 0;

    switch (dayIndex) {
      case 0:
        day = "Понеділок";
        break;

      case 1:
        day = "Вівторок";
        break;

      case 2:
        day = "Середа";
        break;

      case 3:
        day = "Четвер";
        break;

      case 4:
        day = "П'ятниця";
        break;

      case 5:
        day = "Субота";
        break;

      case 6:
        day = "Неділя";
        break;
    }

    var wantToSeeNextDay = confirm(day + ". Хочеш побачити наступний день?");

    if (!wantToSeeNextDay) {
      console.log("Дякую за гру!");
      break;
    }

    dayIndex = (dayIndex + 1) % 7;
  }
} // Task 10


function guessNumberGame() {
  var min = 0;
  var max = 100;
  var guess;
  console.log("Загадайте число від 0 до 100.");

  while (true) {
    guess = Math.floor((min + max) / 2);
    var response = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E > ".concat(guess, ", < ").concat(guess, ", \u0430\u0431\u043E == ").concat(guess, "? (\u0412\u0432\u0435\u0434\u0456\u0442\u044C '>', '<', \u0430\u0431\u043E '=')"));

    if (response === '=') {
      console.log("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E - ".concat(guess, ". \u042F \u0432\u0433\u0430\u0434\u0430\u0432!"));
      break;
    } else if (response === '>') {
      min = guess + 1;
    } else if (response === '<') {
      max = guess - 1;
    } else {
      console.log("Будь ласка, введіть '>', '<', або '='.");
    }
  }
} // Task 11


function multiplicationTable() {
  for (var i = 2; i <= 9; i++) {
    console.log("\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u043C\u043D\u043E\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F ".concat(i, ":"));

    for (var j = 1; j <= 10; j++) {
      console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
    }

    console.log("");
  }
} // Task 12


function getNextDateForUserInput() {
  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }

  function getNextDate(day, month, year) {
    var daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day < daysInMonth[month - 1]) {
      day++;
    } else {
      if (month < 12) {
        day = 1;
        month++;
      } else {
        day = 1;
        month = 1;
        year++;
      }
    }

    return {
      day: day,
      month: month,
      year: year
    };
  }

  var inputDay = parseInt(prompt("Введіть день:"));
  var inputMonth = parseInt(prompt("Введіть місяць:"));
  var inputYear = parseInt(prompt("Введіть рік:"));
  var nextDate = getNextDate(inputDay, inputMonth, inputYear);
  console.log("\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u0430\u0442\u0430: ".concat(nextDate.day, ".").concat(nextDate.month, ".").concat(nextDate.year));
}
"use strict";

// Task 1
function showTypeFunction() {
  var firstFunction = 'Function Declaration';
  var secondFunction = 'Function Expression';
  var thridFunction = 'Arrow Function';
  console.log("Possible options for creating functions: ".concat(firstFunction, ", ").concat(secondFunction, ", ").concat(thridFunction));
} // Task 2


function giveArguments() {
  var userArguments = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0438, \u0440\u043E\u0437\u0434\u0456\u043B\u0435\u043D\u0456 \u043A\u043E\u043C\u0430\u043C\u0438:");
  var argumentsArray = userArguments.split(",");
  console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0456\u0432: ".concat(argumentsArray.length));
} // Task 3


function showResultNumbers() {
  var num1 = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E:"));
  var num2 = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0440\u0443\u0433\u0435 \u0447\u0438\u0441\u043B\u043E:"));

  if (num1 < num2) {
    console.log(-1);
  } else if (num1 > num2) {
    console.log(1);
  } else {
    console.log(0);
  }
} // Task 4


function showFactorial() {
  var number = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0447\u0438\u0441\u043B\u043E:"));

  if (isNaN(number)) {
    console.log("Введено не число.");
  } else if (number < 0) {
    console.log("Факторіал від'ємного числа не визначений.");
  } else {
    var result = 1;

    for (var i = 1; i <= number; i++) {
      result *= i;
    }

    console.log("\u0424\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B \u0447\u0438\u0441\u043B\u0430 ".concat(number, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(result));
  }
} // Task 5


function showNumbersTogether() {
  var num1 = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E:"));
  var num2 = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0440\u0443\u0433\u0435 \u0447\u0438\u0441\u043B\u043E:"));
  var num3 = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0442\u0440\u0435\u0442\u0454 \u0447\u0438\u0441\u043B\u043E:"));

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    return "Введені значення мають бути числами.";
  }

  if (num1 < 0 || num1 > 9 || num2 < 0 || num2 > 9 || num3 < 0 || num3 > 9) {
    return "Кожне з чисел має бути від 0 до 9 включно.";
  }

  var mergedNumber = num1 * 100 + num2 * 10 + num3;
  console.log(mergedNumber);
} // Task 6


function calculateArea() {
  var lengthInput = prompt("Введіть довжину:");
  var length = parseFloat(lengthInput);

  if (isNaN(length)) {
    console.log("Введено неправильну довжину.");
    return;
  }

  var width;
  var widthInput = prompt("Введіть ширину (залиште порожнім для квадрата):");

  if (widthInput !== null && widthInput !== "") {
    width = parseFloat(widthInput);

    if (isNaN(width)) {
      console.log("Введено неправильну ширину.");
      return;
    }
  } else {
    width = length;
  }

  var area = length * width;

  if (length === width) {
    console.log("\u041F\u043B\u043E\u0449\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430: ".concat(area));
  } else {
    console.log("\u041F\u043B\u043E\u0449\u0430 \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A\u0430: ".concat(area));
  }
} // Task 7


function checkPerfectNumber(number) {
  var totalDivider = 0;

  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      totalDivider = totalDivider + i;
    }
  }

  return number === totalDivider;
}

function showResult() {
  var userNumber = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E:"));
  console.log(checkPerfectNumber(userNumber) ? 'number is perfect' : 'number is not perfect');
} // Task 8


function perfectRange() {
  var min = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443"));
  var max = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443"));
  var result = '';

  for (var i = min; i <= max; i++) {
    if (checkPerfectNumber(i)) {
      result += i + ' ';
    }
  }

  alert("".concat(result, " are perfect"));
}
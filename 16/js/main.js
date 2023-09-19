// Task 1

function showTypeFunction() {

    const firstFunction = 'Function Declaration';
    const secondFunction = 'Function Expression';
    const thridFunction = 'Arrow Function';

    console.log(`Possible options for creating functions: ${firstFunction}, ${secondFunction}, ${thridFunction}`)
}

// Task 2

function giveArguments() {
    const userArguments = prompt(`Введіть аргументи, розділені комами:`);
    const argumentsArray = userArguments.split(",");

    console.log(`Кількість аргументів: ${argumentsArray.length}`);
  }

// Task 3

function showResultNumbers() {
    const num1 = parseInt(prompt(`Введіть перше число:`));
    const num2 = parseInt(prompt(`Введіть друге число:`));

    if (num1 < num2) {
        console.log(-1);
      } else if (num1 > num2) {
        console.log(1);
      } else {
        console.log(0);
      }
}

// Task 4

function showFactorial() {
    const number = parseInt(prompt(`Введіть, будь ласка, число:`));

    if (isNaN(number)) {
        console.log("Введено не число.");
      } else if (number < 0) {
        console.log("Факторіал від'ємного числа не визначений.");
      } else {
        let result = 1;
        for (let i = 1; i <= number; i++) {
          result *= i;
        }
        console.log(`Факторіал числа ${number} дорівнює ${result}`);
      }

}

// Task 5

function showNumbersTogether() {
    const num1 = parseInt(prompt(`Введіть перше число:`));
    const num2 = parseInt(prompt(`Введіть друге число:`));
    const num3 = parseInt(prompt(`Введіть третє число:`));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        return "Введені значення мають бути числами.";
      }
    
      if (num1 < 0 || num1 > 9 || num2 < 0 || num2 > 9 || num3 < 0 || num3 > 9) {
        return "Кожне з чисел має бути від 0 до 9 включно.";
      }

    const mergedNumber = num1 * 100 + num2 * 10 + num3;
    console.log(mergedNumber);
}

// Task 6

function calculateArea() {
    const lengthInput = prompt("Введіть довжину:");
    const length = parseFloat(lengthInput);
    
    if (isNaN(length)) {
      console.log("Введено неправильну довжину.");
      return;
    }

    let width;
    const widthInput = prompt("Введіть ширину (залиште порожнім для квадрата):");

    if (widthInput !== null && widthInput !== "") {
      width = parseFloat(widthInput);
      if (isNaN(width)) {
        console.log("Введено неправильну ширину.");
        return;
      }
    } else {
      width = length;
    }

    const area = length * width;
    
    if (length === width) {
      console.log(`Площа квадрата: ${area}`);
    } else {
      console.log(`Площа прямокутника: ${area}`);
    }
  }

// Task 7

function checkPerfectNumber(number) {
    let totalDivider = 0;

    for (let i = 1;i <= number / 2; i++) {
        if(number%i === 0) {
            totalDivider = totalDivider + i
        }
    }
    return number === totalDivider
}

function showResult() {
    let userNumber = parseInt(prompt(`Введіть ваше число:`));
    console.log(checkPerfectNumber(userNumber) ? 'number is perfect' : 'number is not perfect')
}

// Task 8

function perfectRange() {
    let min = parseInt(prompt(`Введіть мінімальне значення діапазону`));
    let max = parseInt(prompt(`Введіть максимальне значення діапазону`));
    let result = '';
    for(let i = min; i<=max;i++) {
        if(checkPerfectNumber(i)) {
            result+=i+ ' ';
        }
    } alert(`${result} are perfect`)
}
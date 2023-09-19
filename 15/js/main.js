// Task 01

function displayUserAge() {

    while (true) {
        const userAge = parseInt(prompt('Enter your age'));
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
}

// Task 02

function displaySpecialSymbol() {
    const userInput = prompt("Please enter a number between 0 and 9:");
    const number = parseInt(userInput);

    if (!isNaN(number) && number >= 0 && number <= 9) {
        let specialChar;

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

        console.log(`Special character for a number ${number} - ${specialChar}`);
    } else {
        console.log("An invalid number has been entered. Please enter a number between 0 and 9.");
    }
}

// Task 03

function displaySumNumbers() {
    const startNumber = parseInt(prompt("Enter the starting number of the range:"));
    const endNumber = parseInt(prompt("Enter the ending number of the range:"));

    if (!isNaN(startNumber) && !isNaN(endNumber)) {
        let sum = 0;

        if (startNumber <= endNumber) {
            for (let i = startNumber; i <= endNumber; i++) {
                sum += i;
            }
        } else {
            for (let i = endNumber; i <= startNumber; i++) {
                sum += i;
            }
        }

        console.log(`The sum of the numbers in the range from ${startNumber} to ${endNumber} is ${sum}`);
    } else {
        console.log(`Please enter the correct numbers for the starting and ending values of the range`)
    }
}

// Task 04

function displayCommonDivisor() {
    const num1 = parseInt(prompt("Enter the first number:"));
    const num2 = parseInt(prompt("Enter the second number:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        let a = Math.abs(num1);
        let b = Math.abs(num2);

        while (b) {
            const remainder = a % b;
            a = b;
            b = remainder;
        }

        alert(`The greatest common divisor of ${num1} and ${num2} is ${a}`);
    } else {
        alert("Please enter the correct numbers");
    }
}

// Task 05

function displayAllDivisors() {
    const number = parseInt(prompt("Enter a number:"));

    if (!isNaN(number)) {
        const divisors = [];

        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                divisors.push(i);
            }
        }

        console.log(`The divisors of the number ${number} are: ${divisors.join(', ')}`);
    } else {
        console.log("Please enter a valid number.");
    }
}

// Task 06

function displayPalindrom() {
    const number = prompt("Enter a five-digit number:");
    for (let i = 0; i < number.length; i++) {
        if (number[i] !== number[number.length - 1 - i]) {
            console.log(`not equal`);
            return false;
        } else {
            console.log(`equal`);
        }
    }
}
// Task 07

function displayPaymentAmount() {
    const purchaseAmount = parseFloat(prompt("Enter the purchase amount:"));

    if (!isNaN(purchaseAmount)) {
        let discount = 0;

        if (purchaseAmount >= 200 && purchaseAmount < 300) {
            discount = 0.03;
        } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
            discount = 0.05;
        } else if (purchaseAmount >= 500) {
            discount = 0.07;
        }

        const discountedAmount = purchaseAmount - purchaseAmount * discount;
        console.log(`The amount to be paid at a discount: $${discountedAmount.toFixed(2)}`);
    } else {
        console.log("Please enter the correct purchase amount.");
    }
}

// Task 08

function calculateStatistics() {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < 10; i++) {
        const userInput = parseInt(prompt("Enter a number:"));

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
}

// Task 09

function displayDaysOfWeek() {
    let dayIndex = 0;

    while (true) {
        let day;

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

        const wantToSeeNextDay = confirm(day + ". Хочеш побачити наступний день?");

        if (!wantToSeeNextDay) {
            console.log("Дякую за гру!");
            break;
        }

        dayIndex = (dayIndex + 1) % 7;
    }
}

// Task 10

function guessNumberGame() {
    let min = 0;
    let max = 100;
    let guess;
    
    console.log("Загадайте число від 0 до 100.");
    
    while (true) {
      guess = Math.floor((min + max) / 2);
      let response = prompt(`Ваше число > ${guess}, < ${guess}, або == ${guess}? (Введіть '>', '<', або '=')`);
      
      if (response === '=') {
        console.log(`Ваше число - ${guess}. Я вгадав!`);
        break;
      } else if (response === '>') {
        min = guess + 1;
      } else if (response === '<') {
        max = guess - 1;
      } else {
        console.log("Будь ласка, введіть '>', '<', або '='.");
      }
    }
  }

// Task 11

function multiplicationTable() {
    for (let i = 2; i <= 9; i++) {
        console.log(`Таблиця множення для ${i}:`);
        for (let j = 1; j <= 10; j++) {
          console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(""); 
      }
}

// Task 12

function getNextDateForUserInput() {
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
  
    function getNextDate(day, month, year) {
      const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
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
  
      return { day, month, year };
    }
  
    const inputDay = parseInt(prompt("Введіть день:"));
    const inputMonth = parseInt(prompt("Введіть місяць:"));
    const inputYear = parseInt(prompt("Введіть рік:"));
  
    const nextDate = getNextDate(inputDay, inputMonth, inputYear);
  
    console.log(`Наступна дата: ${nextDate.day}.${nextDate.month}.${nextDate.year}`);
  }
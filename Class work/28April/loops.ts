//w3school.com

/*function printTable(input: number) {
  for (let x = 1; x <= 10; x++) {
    console.log(`${input} * ${x} = ${input * x}`);
  }
}
printTable(2);*/

//Q1 Write a script to log "Hello, World!" to the console.

console.log("Hello World");

//Q2 Create a variable and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.

let temperature = 20;
if (temperature < 20) {
  console.log("Its Cold here");
} else {
  console.log("Its Fine");
}

/*q3 Use arithmetic operators to solve the problem:
If you have 10 apples and you give away 3, how many do you have left*/

let apple = 10;
console.log("After giving apples ", apple - 3);

//Q4
let firstName = "Zaid";
let lastName1 = "Adnan";

console.log(firstName, lastName1);

//Q5 Write a TypeScript code that uses a comparison operator to check if the number 5 grater than 3

let num = 5;
if (num > 3) {
  console.log(true);
} else {
  console.log(false);
}

//Q 6 Create a function calculate area that takes the radius//
let radius = 5;
let area = 3.14 * radius ** 2;

console.log(area);

/*Q7 Write a loop that logs numbers from 1 to 50. For multiples of 3,
log "Fizz" instead of the number,and for multiples of 5, log "Buzz".*/

for (let x = 1; x <= 50; x++) {
  if (x % 3 === 0) {
    console.log("Fizz");
  } else if (x % 5 === 0) {
    console.log("Buzz");
  } else console.log(x);
}

/*Q8 Define an array  with at least five different temperatures 
Write a script to find and log the highest temperature*/

const temps = [25, 32, 38, 42, 20];
function highestTemp(temps: number[]): number {
  let highestTemp = temps[0];
  for (let x = 1; x < temps.length; x++) {
    if (temps[x] > highestTemp) {
      highestTemp = temps[x];
    }
  }
  return highestTemp; //this can also use to call the function
}
console.log("Highest Temp is ", highestTemp(temps));

//Q9 Create a script that prompts the user to enter their age and then logswhether they are a minor (under 18) or an adult.

let age = 18;

if (age <= 18) {
  console.log("You are not eligilbe to cast the vote");
} else console.log("You are eligible to cast the vote");

//Q10

const numberArrays = [1, 2, 3, 4, 5, -6, -7, -8, 0, 100];

const chechNumberPositive = (numberArray: number[]) => {
  let count = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      count = count + 1;
    }
  }
  return count;
};

console.log("count", chechNumberPositive(numberArrays));

//Arrays and Array Methods
/*Q11 Write a function that takes an array of words and 
returns a new array containing only the words that start with letter a?*/

const wordsArray: string[] = [
  "apple",
  "abid",
  "allah",
  "zaid",
  "adnan",
  "hamdan",
];

function wordStartWithA(words: string[]) {
  return words.filter((words) => words.toLowerCase().startsWith("a"));
}

const wordsArrayStartingwith_a = wordStartWithA(wordsArray);
console.log(wordsArrayStartingwith_a);

//Q12 Create a script that logs the second to last element of an array named Fruits

const fruits = ["Apple", "Banana", "Mango", "Peach", "Orange"];
fruits.splice(0, 1);
console.log(fruits);

/*Q13Develop a function that takes an array of 
numbers and returns a new array with each number squared*/

const number = [2, 3, 4, 5, 6, 8, 7];
function squeareNumberArray(number: number[]) {
  return number.map((number) => number * number);
}
const squaredNumber: number[] = squeareNumberArray(number);
console.log("ReturnedArray With Squared Numbers", squaredNumber);

/*Q14-Write a JavaScript function that accepts an array and reverses 
its elements without using the .reverse() method*/

const number1 = [2, 3, 4, 5, 6, 8, 7];

/*Q15-Given an array[10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that 
logs the number of times the score exceeded the maximum score and the 
number of times it fell below the minimum score.*/

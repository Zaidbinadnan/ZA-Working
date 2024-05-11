"use strict";
//Q1 Write a script to log "Hello, World!" to the console.
console.log("Q1:Hello World");
//Q2 Create a variable and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature = 20;
if (temperature < 20) {
    console.log("Q2:Its Cold here");
}
else {
    console.log("Q2:Its Fine");
}
/*q3 Use arithmetic operators to solve the problem:
If you have 10 apples and you give away 3, how many do you have left*/
let apple = 10;
console.log("Q3:After giving apples ", apple - 3);
//Q4
let firstName = "Zaid";
let lastName1 = "Adnan";
console.log("Q4:", firstName, lastName1);
//Q5 Write a TypeScript code that uses a comparison operator to check if the number 5 grater than 3
let num = 5;
if (num > 3) {
    console.log("Q5:", true);
}
else {
    console.log("Q5:", false);
}
//Q 6 Create a function calculate area that takes the radius//
let radius = 5;
let area = 3.14 * radius ** 2;
console.log("Q6:", area);
/*Q7 Write a loop that logs numbers from 1 to 50. For multiples of 3,
log "Fizz" instead of the number,and for multiples of 5, log "Buzz".*/
for (let x = 1; x <= 50; x++) {
    if (x % 3 === 0) {
        console.log("Fizz");
    }
    else if (x % 5 === 0) {
        console.log("Buzz");
    }
    else
        console.log(x);
}
/*Q8 Define an array  with at least five different temperatures
Write a script to find and log the highest temperature*/
const temps = [25, 32, 38, 42, 20];
function highestTemp(temps) {
    let highestTemp = temps[0];
    for (let x = 1; x < temps.length; x++) {
        if (temps[x] > highestTemp) {
            highestTemp = temps[x];
        }
    }
    return highestTemp; //this can also use to call the function
}
console.log("Q8:Highest Temp is ", highestTemp(temps));
//Q9 Create a script that prompts the user to enter their age and then logswhether they are a minor (under 18) or an adult.
let age = 18;
if (age <= 18) {
    console.log("Q9:You are not eligilbe to cast the vote");
}
else
    console.log("Q9:You are eligible to cast the vote");
//Q10
const numberArrays = [1, 2, 3, 4, 5, -6, -7, -8, 0, 100];
const chechNumberPositive = (numberArray) => {
    let count = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
            count = count + 1;
        }
    }
    return count;
};
console.log("Q10:count", chechNumberPositive(numberArrays));
//Arrays and Array Methods
/*Q11 Write a function that takes an array of words and
returns a new array containing only the words that start with letter a?*/
const wordsArray = [
    "apple",
    "abid",
    "allah",
    "zaid",
    "adnan",
    "hamdan",
];
function wordStartWithA(words) {
    return words.filter((words) => words.toLowerCase().startsWith("a"));
}
const wordsArrayStartingwith_a = wordStartWithA(wordsArray);
console.log("Q11:", wordsArrayStartingwith_a);
//Q12 Create a script that logs the second to last element of an array named Fruits
const fruits = ["Apple", "Banana", "Mango", "Peach", "Orange"];
fruits.splice(0, 1);
console.log("Q12:", fruits);
/*Q13Develop a function that takes an array of
numbers and returns a new array with each number squared*/
const number = [2, 3, 4, 5, 6, 8, 7];
function squeareNumberArray(number) {
    return number.map((number) => number * number);
}
const squaredNumber = squeareNumberArray(number);
console.log("Q13:ReturnedArray With Squared Numbers", squaredNumber);
/*Q14-Write a JavaScript function that accepts an array and reverses
its elements without using the .reverse() method*/
const number1 = [2, 3, 4, 5, 6, 8, 7];
console.log("Q14: unsolved");
/*Q15-Given an array[10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that
logs the number of times the score exceeded the maximum score and the
number of times it fell below the minimum score.*/
/*const number2 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
function scoreExceededTheMaximum(number: number[]) {
  let minimumScore = [1];
  for (let x = 1; number2.length > minimumScore; x++);
}*/
console.log("Q 15 Unsolved");
/*Q16 Create a function that removes all falsey values from an array.
Falsey values include false, null, 0, "", undefined, and NaN.*/
const abcarray = [0, 1, 2, false, "", null, undefined, NaN];
function removeFalseyValues(abcarray) {
    return abcarray.filter(Boolean);
}
const withoutFalseyValue = removeFalseyValues(abcarray);
console.log("Q16:", withoutFalseyValue);
/*Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArrays = array1.concat(array2);
console.log("Q17:", concatenatedArrays);
/*Q18 Develop a function called sumOfElements that calculates the sum of all elements
in an array that are either even or odd, based on a parameter.*/
const sumArray = [1, 2, 3, 4, -1, -2, -3, 9, 25];
function sumOfEllements(numbers) {
    let sum = 0;
    for (let x = 0; x > numbers.length; x++) {
        sum += numbers[x];
    }
    return sum;
}
console.log("Q18:Sum of elements:", sumOfEllements(sumArray));
console.log("Q18 Why showing result as 0???");
/*Q 19:Create a function that checks whether an element exists in an array. If it exists,
return the index, otherwise return -1.*/
//const elementArray = [1,2,3,4,5];
//function findElement<Z> (arr:Z[],element:Z): number {
//for (let x=0; x<arr.length;x++ );
//if (arr[x] === element){
// return x ;
//}return -1;
//}
console.log("Q19: Unsolved");
/*Q20 Write a function to find and return the smallest number in an array of integers.*/
const smallestNumberArray = [99, 22, 44, 25, 102];
function smallestNumber(numbers) {
    let smallest = numbers[0];
    for (let x = 0; x < numbers.length; x++) {
        if (numbers[x] < smallest) {
            smallest = numbers[x];
        }
    }
    return smallest;
}
const smallest = smallestNumber(smallestNumberArray);
console.log("Q20: Smallest Number in Array", smallest);
/*Q21:Write a function calculateProduct that takes an array of numbers
and returns the product of all elements */
//const product = [1,2,3,4,5];
/*function calculateProduct (numbers:number[]):number {
if(numbers.length === 0)
  return 0;
 let product1 =1;
for (let x=0; x< numbers.length;x++);{
  product *= numbers[x];
}
}*/
console.log("Q20: Unsolved");
//Q21:
console.log("Q21:unsolved");
/*Q22:
Develop a function filterByLength that takes an array of strings and a number n.
The function should return an array containing only the strings that are longer than n characters.*/
const stringArray = [
    "orange",
    "Mango",
    "Apple",
    "Onion",
    "Bnana",
    "Graps",
    "Hamdan",
];
console.log("Q22: Unfiltered string", stringArray);
const n = 5;
function filterbyLenght(string, n) {
    return string.filter((str) => str.length > n);
}
const filteredString = filterbyLenght(stringArray, n);
console.log("Q22: Filtered String n=5:", filteredString);
//Q:23 Create a function findDuplicates that finds and logs all duplicates in an array.
//const abc = [1, 2, 3, 4, 1, 3, 5, 6, 5, 3, 2];
//function findDuplicate(numbers: number[]) {}
console.log("Q23 Unsolved");
/*Q24:Write a function incrementAll that takes an array of integers and
increments each element by one*/
const xyz = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function incrementAll(arr) {
    return arr.map((num) => num + 1);
}
const incrementedArray = incrementAll(xyz);
console.log("Q24:incremented Array", incrementedArray);
/*Q25:Develop a function countOccurrences that counts how many times a specific
element appears in an array?*/
console.log("Q25 unsolved");
console.log("Q26 unsolved");
/*Q26:Write a function that receives an array of names and formats them
 into a string separated by commas, except for the last two names, which should be separated by "and".*/
console.log("Q27:Unsolved");
//Q28:
const tempFahrenhit = [91, 98, 55];
function convertTempInCelsius(fahrenheitTemperature) {
    return fahrenheitTemperature.map((temp) => ((temp - 32) * 5) / 9);
}
const celsiusTemp = convertTempInCelsius(tempFahrenhit);
console.log("Q28:Celsius Temp Array:", celsiusTemp);
console.log("Q29: Unsolved");
console.log("Q30: Unsolved");
/*Q31 Develop a function that takes two inputs, a string and a character, and returns the number
of times the character appears in the string.*/
const string = "hamdan bin zaid bin adnan";
console.log("Q31 String:", string);
function countCharacter(string, character) {
    let count = 0;
    for (let x = 0; x < string.length; x++) {
        if (string[x] === character) {
            count++;
        }
    }
    return count;
}
const character = "a";
const occurance = countCharacter(string, character);
console.log("Q31:Occurrence of a:", occurance);
console.log("Q32: Unsolved");
console.log("Q33: Unsolved");
console.log("Q34: Unsolved");
//Q35 calculator in seprate file

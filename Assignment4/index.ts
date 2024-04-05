//1. Hello Variable
let greeting = "Hello World";
console.log(greeting);

//2. Basic Math
let num1 = 30;
let num2 = 5;

// addition
console.log(num1 + num2); //35

//Difference
console.log(num1 - num2); //25

//product / multiplicaion
console.log(num1 * num2); //150

//Quotient / division
console.log(num1 / num2); // 6

//Exponentiation
console.log(num1 ** num2);

//3. 3. Swapping Values Swap the values of two variables without using a third variable.
let a = 2;
let b = 4;

[a, b] = [b, a]; //a=4 & b=2
console.log("a", a);
console.log("b", b);

//4.Type Annotation (TypeScript) This applies to TypeScript. Create a string variable and try changing its type.
let message: string;

//message = 2; it will give error because we are trying to assiging number to variable having type string

//5. Modulus Operator. Use the modulus operator to find the remainder of two numbers.
console.log(num1 % num2); // 0

//6. Increment Challenge Increment a variable's value by 1 using two different methods.
let counter = 0;
counter += 1;
console.log(counter); // 1
counter++;
console.log(counter); // 2

//7.Logical Gates: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a1 = true,
  b1 = false,
  c = true;
// 7. expressions using these.
let andgate = a1 && b1;
console.log("andgate "andgate); //false

let andgate2 = a1 && c;
console.log("andgate2 "andgate2); //true

let andgate3 = b1 && c;
console.log("andgate3 "andgate3); //false

let orGate = a1 || b1;
console.log("orGate: "orGate); // true

let orGate1 = a1 || c;
console.log("orGate1: "orGate1);

let orGate2 = b1 || c;
console.log("orGate2: "orGate2);

let notGate = !(a1 || b1 || c);
console.log(notGate); // False as revrse the result

//8. Compound Assignment:Show examples of using compound assignment operators.Use +=, -=, *=, and /= on this variable
let num = 10;
num += 2;
console.log(num); //12
num -= 1;
console.log(num); //11
num *= 2;
console.log(num); //22
num /= 2;
console.log(num); //11

//9. Even or Odd: a program to check if a number is even or odd.

 function checkEvenOrOdd(number: number): string {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

let num5: number = 10;
let num6: number = 7;

console.log(`${num5} is ${checkEvenOrOdd(num5)}.`);
console.log(`${num6} is ${checkEvenOrOdd(num6)}.`);

//10. Voting Eligibility:Check if a person is eligible to vote.
let age =17;
if (age > 18){
console.log("Yo are eligible to cast the vote");
} else {
  console.log("You are not eligible to cast the vote");
}

let age2 =19;
if (age2 > 18){
console.log("Yo are eligible to cast the vote");
} else {
  console.log("You are not eligible to cast the vote");
}

//11. Grading System: Assign a grade based on a numerical score 
let score= 43;
if (score>=90){
  console.log("Grade: A");
} else if (score>=75) {
  console.log("Grade: B");
} else if (score>= 60){
  console.log("Grade: C");
}else if (score>=50){
console.log("Grade: D");
} else {
  console.log("Grade: F");
}

//12. Max of Three: Max of Three Find the maximum of three numbers.
let x = 5;
let y = 10;
let z = 7;

if (x > y) {
    if (x > z) {
        console.log("x is the maximum of three:", x);
    } else {
        console.log("z is the maximum of three:", z);
    }
} else {
    if (y > z) {
        console.log("y is the maximum of three:", y);
    } else {
        console.log("z is the maximum of three:", z);
    }
}

//13.Leap Year Checker
let year: number =365;
if (year>=365){
  console.log("It's not the leap year");
}else {
  console.log("Its the leap year");
}

//14. Fahrenheit to Celsius Converter
let fahrenheit: number = 91;
fahrenheit = (fahrenheit - 32) * 5 / 9;
console.log("Temperature in Celsius is: ",fahrenheit);

//15. Positive, Negative, or Zero
let number: number = 2; 

if (number > 0) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

// 16.Multiplication Table multiplication table of a given number up to 10
let number1 = 2
console.log("2*1=", number1); //2
number1 +=2
console.log("2*2=", number1); //4
number1 +=2
console.log("2*3=", number1); //6
number1 +=2
console.log("2*4=", number1); //8
number1 +=2
console.log("2*5=", number1); //10
/*how to declare the function function name can be any name like Math. or add subtract etc
function functionName(){}*/
let n = 2;
let n2 = 2;
function greet() {
  console.log("Hello");
}

// function calling : how to call a function
greet();

function add() {
  console.log(n + n2);
}
add();

//function paramaters / arguments are same
function greetWithParamater(name: string) {
  console.log("Hello", name);
}
greetWithParamater("zaid");
greetWithParamater("bin");
greetWithParamater("adnan");

//function with retrn statement

function abc() {
  console.log("this is abc function");
  return 34; // to return the value  it should be the last line of the code
}
const a = abc();
console.log("a", a);

//array
// instead of defining variables individually use array
let fruit0 = "apple";
let fruit1 = "banana";

const fruit = ["apple", "banana", "orange"];
console.log(fruit);

//to print specific value / arrayname[index] index alwys start from 0 for programer

console.log(fruit[0]);
console.log(fruit[2]);

console.log("Array lenght", fruit.length);
/*methods of array adding and removing values from array
push method - to add dynamic value in array to call the push function u have to use () 
*/
fruit.push("peach", "graps");
console.log(fruit);
console.log("Array lenght", fruit.length);
//pop method to delete value from array, it will delete the last value
fruit.pop();
console.log(fruit);
const valueRemove = fruit.pop();
console.log("after remove", valueRemove);
console.log("after remove", fruit);

// to add value or remove from specific two tway to add
//1- unshift- add value at start of array
//2- shift it will delete the value from the start

fruit.unshift("peach", "graps2");
console.log("unshift", fruit);

fruit.shift();
console.log("shift", fruit);

//to add or remove value in specific position in array
//1-splice ()
const fruit2 = ["apple", "banana", "orange", "mango", "mango2", "bnana3"];
console.log("fruit2 array ", fruit2);
//to add or delete in specific position of array
fruit2.splice(1, 3);
console.log("after delete using splice", fruit2);
//to add 0 to use add
fruit2.splice(1, 0, "orrange4", "orrange5");
console.log("after using splice to add", fruit2);

fruit2.splice(1, 1, "orrange6", "orrange7");
console.log("after using splice to add", fruit2);

//slice method it will slice out a piece of an array it cannot effect original array

const fruit5 = ["a", "b", "c", "d", "e"];
console.log("before slice method", fruit5);

fruit5.slice(1, 3);
console.log("after slice", fruit5);

fruit5.slice(1, 2);
console.log("after slice", fruit5);

// 28 -4 24 class

function printTable(input: number) {
  for (let x = 1; x <= 10; x++) {
    console.log(`${input} * ${x} = ${input * x}`);
  }
}
printTable(2);

// JSON object

const detail = {
  name: "Zaid",
  age: 35,
  gender: "Male",
  isuser: true,
};

// accessing JSON object

console.log("detail:", detail);
console.log(detail.name); // dot notation to print result use dot.
console.log(detail.gender);
console.log(detail.age);
console.log(detail["gender"]);
console.log(detail["name"]);

let message = "Hello World";
console.log(message);
export {}; // it will ignore the error of redeclaration of same variable

//types of typing
//implicit: based on assgined value judge the type
let fName = "Zaid";
//explicit: u have to declear the type of variable is strong typing
let age: number = 35;

let z = 6;
if (true) {
  let z = 4;
  console.log("let:z=" + z);
} else {
  let z = "string";
}
console.log("let: " + z);

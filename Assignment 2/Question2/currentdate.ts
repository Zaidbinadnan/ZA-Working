//: Current Date: 24-March-2024

const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augst",
  "September",
  "October",
  "November",
  "December",
];

let day = date.getDate();
let month = months[date.getMonth()];
let year = date.getFullYear();

console.log(day, month, year);

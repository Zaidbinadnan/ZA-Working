"use strict";
function getrandomnumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const min = 1;
const max = 100;
const randomNumber = getrandomnumber(min, max);
console.log("Random number:", randomNumber);

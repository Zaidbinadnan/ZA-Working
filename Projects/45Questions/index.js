"use strict";
/*Q1 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as,
“Hello Eric, would you like to learn some Python today?”*/
const name1 = "Zaid Bin Adnan";
console.log(`Q2: Hello ${name1},  would you like to learn some Python today`);
/*Q2:Name Cases: Store a person’s name in a variable, and then print that person’s
name in lowercase, uppercase, and titlecase.*/
let name2 = "zaid bin adnan";
console.log("Q3: Lowercase ", name2.toLowerCase());
console.log("Q3: Uppercase ", name2.toUpperCase());
console.log("Q3: Lowercase ", name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase());
/*Q4:Famous Quote: Find a quote from a famous person you admire. Print the quote and
the name of its author. Your output should look something like the following,
including the quotation marks:Albert Einstein once said,
“A person who never made a mistake never tried anything new.”*/
let quote = "A person who never made a mistake never tried anything new.";
let person = "Albert Einstein";
console.log(`Q4: ${person} once said, "${quote}"`);
/*Q5:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s
name in a variable called famous_person. Then compose your message and store it
in a new variable called message. Print your message.*/
let famous_person = "Albert Einstein";
let message = ` ${famous_person} once said, "${quote}"`;
console.log("Q5:", message);
/*Q6:Stripping Names: Store a person’s name, and include some whitespace characters
at the beginning and end of the name. Make sure you use each character combination,
"\t" and "\n", at least once. Print the name once, so the whitespace around the name
is displayed. Then print the name after striping the white spaces.*/
let nameWithwhiteSpace = "\t\n     zaid bin adnan   \n\t";
console.log("Q6: Original", nameWithwhiteSpace);
let strippedname = nameWithwhiteSpace.trim();
console.log("Q6: Stripped Name:", strippedname);
/*Q7:Number Eight: Write addition, subtraction, multiplication, and division operations
that each result in the number 8. Be sure to enclose your operations in print statements
 to see the results.*/
console.log("Addition", 6 + 2);
console.log("Subtraction", 12 - 4);
console.log("Multiplication", 2 * 4);
console.log("Division", 16 / 2);
/*Q8:You should create four lines that look like this:console.log(5 + 3)Your output should simply be four
lines with the number 8 appearing once on each line.*/
console.log("Q8:", 6 + 2);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 2);
/*Q9:Favorite Number: Store your favorite number in a variable. Then, using that variable,
create a message that reveals your favorite number. Print that message.*/
let favoriteNumber = 2;
console.log("q9: My favorite number is ", favoriteNumber);
/*Q10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 If you don’t have anything specific to write because your programs are too simple at this point,
 just add your name and the current date at the top of each program file. Then write one sentence
 describing what the program does.*/
//Name: Zaid Bin Adnan
//Date: 18-05-2024
//This program stores & show result a favorit Number
let favoriteNumber2 = 2;
console.log("q9: My favorite number is ", favoriteNumber);
/*Q11:Names: Store the names of a few of your friends in a array called names. Print each person’s
name by accessing each element in the list, one at a time.*/
let names = ["Wajid", "Sarfraz", "Ahmed", "Anas", "Hamdan", "Waqar"];
names.forEach((name) => {
    console.log("Q11:", name);
});
/*Q12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each
person’s name, print a message to them. The text of each message should be the same, but each
message should be personalized with the person’s name.*/
names.forEach((name) => {
    console.log(`Q12: Hi ${name}, Are you free today?`);
});
/*Q13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements
 about these items, such as “I would like to own a Honda motorcycle.”*/
let transport = ["Hayabusa", "Hyundai Santa-Fe", "Ducati"];
transport.forEach((item) => console.log(`Q13: I would like to own ${item}`));
/*Q14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
console.log("Gust dinner invite");
let dinnerList = ["Hamdan", "Anas", "Sarfraz", "Abdul Qadir", "Rizwan Asghar"];
console.log("Gust list", dinnerList);
dinnerList.forEach((list) => console.log(`Q14: ${list} let have dinner today`));
//Q15:Changing guest list: not comming guest
let guestNotComming = "Anas";
console.log(`Q15: ${guestNotComming} is unable to join us at today's dinner`);
// list modification repeleacing name with not comming guest
dinnerList.splice(1, 1, "Ahmed");
console.log("new list", dinnerList);
dinnerList.forEach((list) => console.log(`Hi ${list} let have dinner today`));
//Q16 More Guset found bigger table
console.log("I've found a bigger dinner table");
//addition of three noew gest to list at Q15
let newGuests = ["Ibnul Hassan", "Mahboob Ahmed", "Asif Ali"];
//Add one new guest to the beginning of your array.
dinnerList.unshift(newGuests[0]);
console.log("New gest added at start", dinnerList);
//Add one new guest to the middle of your array
dinnerList.splice(Math.floor(dinnerList.length / 2), 0, newGuests[1]);
console.log("New gest added at middle", dinnerList);
//new invite to updated list
console.log("Q16: New invite to updated list");
dinnerList.forEach((list) => console.log(`Hi ${list} let have dinner today`));
//Q17 Shrinking Guest List: table is not on time
console.log("Sorry, Bigger table is not arrived on time, so i've to invite only two peoples");
//Remove guests from your list one at a time until only two names remain
while (dinnerList.length > 2) {
    let removedGuest = dinnerList.pop();
    console.log(`Sorry ${removedGuest}, I'm unable to invite you now due to some issue`);
} // invite cancellation messee to rest
//Print a message to each of the two people still on your list,
console.log("Invite to rest two");
dinnerList.forEach((list) => console.log(`Hi ${list} you are still invited to today's dinner`));
// Remove the last two names from your list, so you have an empty list.
dinnerList.splice(0, dinnerList.length);
console.log("Empty dinnerList", dinnerList);
//q18:Seeing the World: Think of at least five places in the world you’d like to visit.
let seeingTheWorld = ["Makkah", "Madina", "Austria", "London", "Canada"];
console.log("Q18: originalPosition", seeingTheWorld);
//Print your array in alphabetical order without modifying the actual list.
console.log("In alphabetical order", [...seeingTheWorld].sort());
//Show that your array is still in its original order by printing it again.
console.log("To check original order", seeingTheWorld);
//Reverse the order of your list. Print the array to show that its order has changed.
seeingTheWorld.sort();
console.log("Sorting the order", seeingTheWorld);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
seeingTheWorld.reverse();
console.log("Reversing the order again", seeingTheWorld);
/*Sort your array so it’s stored in alphabetical order. Print the array
to show that its order has been changed.*/
seeingTheWorld.sort((a, b) => b.localeCompare(a));
console.log("Sort in reverse alphabetical order", seeingTheWorld); //?????
/*Q19:Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner.*/
console.log(`Number of guest for dinner @ Q16: ${newGuests.length}`);
//Q20: List of mountains
let mountains_cities = ["K2", "Mount Everest", "Lahore", "Burewala", "Sahiwal"];
mountains_cities.forEach((mountcities) => console.log("Q20 List:", mountcities));
//They think of something you could store in a TypeScript Object.
let tv = {
    brand: "LG",
    model: 2022,
    color: "Black",
};
console.log("TV", tv);
console.log("Tv Brand", tv.brand);
console.log("TV Model", tv["model"]);
//Q22: index error in array
let errorArray = [1, 2, 3, 4, 5, 6];
console.log(errorArray[8]); //index error as 8 not exisits
console.log(errorArray[5]); // giving correct index number of array
//Q23: Conditional Tests:
let car = "suzuki";
let model = 2021;
let itscar = true;
let color = "silver";
let number = 123;
//tests
console.log("Test1", car == "suzuki"); // true
console.log("Test2", model === 2021); //true
console.log("Test3", itscar == true); // true
console.log("Test4", color === "silver"); //true
console.log("Test5", number == 123); //true
console.log("Test6", car !== "suzuki"); //false
console.log("Test7", model > 2022); // false
console.log("Test8", itscar !== true); //false
console.log("Test9", color !== "silver"); //false
console.log("Test10", number !== 123); //false
//Q24 Some more tests
let string1 = "onion";
let string2 = "apple";
let string3 = "ABC";
let string4 = "abc";
let string5 = "def";
let number1 = 2;
let number2 = 4;
let number3 = 2;
let array = [1, 2, 3, 4, 5, 6, 7];
// Tests for equality and inequality with strings
console.log("Q24 Equality Test", string1 == "onion");
console.log("Q24 Inequality Test", string2 !== "apple");
//Tests using the lower case function
console.log("Tests using the lower case function:");
console.log(string3.toLowerCase() === string4); // True
console.log(string4.toLowerCase() === string5); // False
console.log(string3.toLowerCase() !== string4); // False
console.log(string3.toLowerCase() === string4); // True
/*Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to*/
console.log("Q24 Number tests");
console.log(number1 === number3); // True
console.log(number1 !== number2); // True
console.log(number1 > number2); // False
console.log(number1 < number2); // True
console.log(number1 >= number3); // True
console.log(number1 <= number3); // True
console.log(number1 <= number2); // True
console.log(number2 >= number3); // True
// Tests using "and" and "or" operators
console.log(" Q24 Tests using and and or operators");
console.log(number1 === 2 && number2 === 4); // True
console.log(number1 === 2 && number2 === 2); // False
console.log(number1 === 2 || number2 === 4); // True
console.log(number1 === 4 || number2 === 2); // False
//Test whether an item is in a array
console.log("Q24 Test whether an item is in a array");
console.log(array.includes(3)); // True
console.log(array.includes(8)); // False
//Test whether an item is not in a array
console.log("Q24 Test whether an item is not in a array");
console.log(array.includes(3)); // True
console.log(array.includes(8)); // False
//Q 25 Alien Colors #1:
//Write an if statement to test
console.log("Q25 Alien Colrs");
let alien_color = "green";
if (alien_color === "green") {
    console.log("You just earned 5 points!");
}
/*Write one version of this program that passes the if test and another that fails.
 (The version that fails will have no output.)*/
let alien_color1 = "red";
if (alien_color1 === "green") {
    console.log("You just earned 5 points!");
}
//Q26 Alien Colors #2:
console.log("Q26 Alien color 2");
if (alien_color === "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
// run else part
if (alien_color === "red") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
//Alien Color 3
console.log("Q27 Alien color 3 ");
let alien_color2 = "green";
if (alien_color2 === "green") {
    console.log("You just earned 5 points!");
}
else if (alien_color2 === "yellow") {
    console.log("You just earned 10 points!");
}
else if (alien_color2 === "red") {
    console.log("You just earned 15 points!");
}
//2nd
let alien_color3 = "yellow";
if (alien_color3 === "green") {
    console.log("You just earned 5 points!");
}
else if (alien_color3 === "yellow") {
    console.log("You just earned 10 points!");
}
else if (alien_color3 === "red") {
    console.log("You just earned 15 points!");
}
//3rd
let alien_color4 = "red";
if (alien_color4 === "green") {
    console.log("You just earned 5 points!");
}
else if (alien_color4 === "yellow") {
    console.log("You just earned 10 points!");
}
else if (alien_color4 === "red") {
    console.log("You just earned 15 points!");
}
//Q28 Stages of Life:
console.log("Q28 Stages of Life");
let age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else if (age >= 65) {
    console.log("The person is an elder.");
}
// Q29 Favorite Fruit:
console.log("Q29 Favorite Fruit");
let favorite_fruits = ["apple", "banana", "mango"];
// Check for apple
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples");
}
// Check for banana
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas");
}
// Check for mango
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes");
}
// Check for orange
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges");
}
// Check for grape
if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes");
}
//Q30:Hello Admin:
console.log("Q30");
let usernames = ["zaid", "hamdan", "jahanzaib", "sarfraz", "admin"];
usernames.forEach((username) => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
//Q31
console.log("Q31:checking user array not empty");
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames.forEach((username) => {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
}
console.log("Q31 removing all users");
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users");
}
//Q32: chcking user names
console.log("Q32: chcking user names");
let current_users = ["zaid", "hamdan", "jahanzaib", "waqar"];
let new_users = ["sarfraz", "adnan", "jahanzaib", "hamdan"];
new_users.forEach((new_user) => {
    if (current_users.includes(new_user.toLowerCase())) {
        console.log(`The username '${new_user}' is not avaiable. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_user}' is available.`);
    }
});
//Q33:
console.log("Q33: Ordinal Numbers");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
});
//Q34 Pizzas:
console.log("Q34");
let favorite_Pizza = [
    "Mallai Botti",
    "Fajita",
    "Peri Peri",
    "Chicken Supreme",
];
for (let pizza of favorite_Pizza) {
    console.log(`I like ${pizza} pizza`);
}
console.log("I love pizza");
//Q35 Animals
console.log("Q35 Animals");
let animals = ["Dog", "Cat", "Horse"];
//using for loop to print each name
for (let animal of animals) {
    console.log(animal);
}
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet`);
}
console.log("Any of these animals would make a great pet!");
//Q36T-Shirt
console.log("Q36 T-Shirt");
function make_shirt(size, message) {
    console.log(`The shirt size is ${size} and The message is ${message}`);
}
//calling function
make_shirt("Large", "Lets Make The Day Beautiful Together");
make_shirt("Medium", "Love the nature");
make_shirt("Small", "Its a New Start");
//Q37Large Shirts:
console.log("Q37 Modify the make_shirt function");
function make_shirt2(size = "large", message = "I Love TypeScript") {
    console.log(`The shirt size is ${size} and The message is ${message}`);
}
//calling function
make_shirt2();
make_shirt2("Medium");
make_shirt2("Small");
//Q38
console.log("Q38");
function decribe_city(city, country = "unknown") {
    console.log(`${city} is in ${country}`);
}
decribe_city("Karachi", "Pakistan");
decribe_city("Lahore", "Pakistan");
decribe_city("Viana");
//Q39
console.log("Q 39");
function city_country(city, country) {
    console.log(`"${city},${country}"`);
}
city_country("Lahore", "Pakistan");
city_country("Multan", "Pakistan");
city_country("Burewala", "Pakistan");
//q40
console.log("Q40");
function make_album(artistName, albumTitle, albumTrack) {
    let albumObject = {
        artistName: artistName,
        albumTitle: albumTitle,
        albumTrack: albumTrack,
    };
    if (albumTrack !== undefined) {
        albumObject.albumTrack = albumTrack;
    }
    return albumObject;
}
//Q:creating album
let album1 = make_album("Nusrat Fateh Ali Khan", "Dust To Gold");
let album2 = make_album("Junaid Jamsheed", " Mehboob E Yazdaan", 2);
let album3 = make_album("Junaid Jamsheed", " Jalwa E Janna");
console.log(album1);
console.log(album2);
console.log(album3);
//Q 41:
console.log("Q41 Magicians Name");
let magicians = ["Magicane A", "Magicane B", "Magicane C"];
function show_magicians(magicians) {
    magicians.forEach((magicine) => {
        console.log(magicine);
    });
}
show_magicians(magicians);
//Q42
console.log("Q42 Great Function to magicianes");
function make_great(magicians) {
    for (let x = 0; x < magicians.length; x++) {
        magicians[x] = `${magicians[x]} is the great`;
    }
}
make_great(magicians);
show_magicians(magicians);
//Q43
console.log("Q43");
// Repeat above Function to show magicians
function show_magicians1(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Push method in Function to create a new array with word the Great added to each
function make_great1(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
// Q:Original array of magician's names
let magicians1 = ["Magicane D", "Magicane E", "Magicane F"];
// Q:Create a copy of the array and modify it to include "the Great"
let copyOfMagicians1 = [...magicians1];
let greatMagicians1 = make_great1(copyOfMagicians1);
// Q: Display both arrays to show the original names and the modified names
console.log("Original Magicians:");
show_magicians1(magicians1);
console.log("Great Magicians:");
show_magicians1(greatMagicians1);
//Q44
console.log("Q44");
// Function to order
function orderSandwich(...items) {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("  No item is selected.");
    }
    else {
        items.forEach((item, index) => {
            console.log(`  ${index + 1}. ${item}`);
        });
    }
}
// Call the function
orderSandwich("Club", "Cheese", "Plane");
orderSandwich("Chicken", "Egg", "Grilled");
orderSandwich("Beaf", "Honey");
//Q45
console.log("Q45");
// Q:Function to store information about a car
function createCar(manufacturer, model, options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add optional properties to the car object
    for (let key in options) {
        car[key] = options[key];
    }
    return car;
}
// Q:Call the function with required information and additional properties
let myCar = createCar("Suzuki", "Cultus", { color: "Silver", year: 2021 });
console.log(myCar);

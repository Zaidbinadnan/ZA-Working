#! /usr/bin/env node
import inquirer from "inquirer";
//option to add play again
let playAgain = true;
do {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const answer = await inquirer.prompt([
        {
            name: "userGuesNumber",
            type: "number",
            message: "Please guess a number from 1-6: ",
        },
    ]);
    if (answer.userGuesNumber === randomNumber) {
        console.log("Congratulations you guessed the right number");
    }
    else {
        console.log(`Sorry the correct number was ${randomNumber}.`);
    }
    //option to play again or exit game
    const { playAgainOption } = await inquirer.prompt([
        {
            name: "playAgainOption",
            type: "list",
            message: "What would you like to do?",
            choices: ["Play again", "Exit game"],
        },
    ]);
    playAgain = playAgainOption === "Play again";
} while (playAgain);

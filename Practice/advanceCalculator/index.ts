import inquirer from "inquirer";

async function calculator() {
  let continueCalculation = true;

  do {
    const answer = await inquirer.prompt([
      { message: "Enter first number", type: "number", name: "firstNumber" },
      {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: [
          "Addition",
          "Subtraction",
          "Multiplication",
          "Division",
          "%",
          "x2",
          "Square Root",
          "Exit",
        ],
      },
      { message: "Enter second number", type: "number", name: "secondNumber" },
    ]);

    // conditional statements
    if (answer.operator === "Addition") {
      console.log(answer.firstNumber + answer.secondNumber);
    } else if (answer.operator === "Subtraction") {
      console.log(answer.firstNumber - answer.secondNumber);
    } else if (answer.operator === "Multiplication") {
      console.log(answer.firstNumber * answer.secondNumber);
    } else if (answer.operator === "Division") {
      console.log(answer.firstNumber / answer.secondNumber);
    } else if (answer.operator === "%") {
      console.log((answer.firstNumber / answer.secondNumber) * 100 + "%");
    } else if (answer.operator === "x2") {
      console.log(answer.firstNumber ** answer.secondNumber);
    } else if (answer.operator === "Square Root") {
      console.log(Math.sqrt(answer.firstNumber));
    } else if (answer.operator === "Exit") {
      continueCalculation = false;
      console.log("Exiting calculator...");
    } else {
      console.log("Select valid operator");
    }
  } while (continueCalculation);
}

calculator();

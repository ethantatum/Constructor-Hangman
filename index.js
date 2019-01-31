const Word = require('./word.js');

const inquirer = require('inquirer');

const library = [`horizontal`, `obstinate`, `terrifying`, `negligence`, `confirmation`, `hesitation`, `excellence`, `fantastic`];

// Declaring a global variable to use in the askUser function
let userInput;
let currentWord;
let newWord;
let consoleWord;

// Function to use inquirer to get a letter from the user
    // Stuck on how to pass userInput into Word.wordguess function
const askUser = function() {
    inquirer
        .prompt([
            {
                name: "userInput",
                type: `input`,
                message: `Pick a letter!`
            }
    ])
    .then(function(inquirerResponse) {
        userInput = inquirerResponse.userInput;
        newWord.wordGuess(userInput);
        console.log(newWord.wordString());

    })
}

// Function to pull word from bank and pass it into Word constructor
let startGame = function() {
    if(library.length > 0) {
        currentWord = library[0];
        newWord = new Word(currentWord);
        consoleWord = newWord.wordString();
        console.log(`${consoleWord}
        `); 
        askUser();
    } else {
        console.log(`That's all the words!`)
    }
} // Ends startGame function

startGame();
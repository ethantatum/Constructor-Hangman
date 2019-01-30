const Word = require('./word.js');

const inquirer = require('inquirer');

const library = [`horizontal`, `obstinate`, `terrifying`, `negligence`, `confirmation`, `hesitation`, `excellence`, `fantastic`];

let userInput;

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
    })
}

let startGame = function() {
    if(library.length > 0) {
        let currentWord = library[0];
        let newWord = new Word(currentWord);
        let consoleWord = newWord.wordString();
        console.log(`${consoleWord}
        `); 
        askUser();
    } else {
        console.log(`That's all the words!`)
    }
} // Ends startGame function

startGame();
const Word = require('./word.js');

const inquirer = require('inquirer');

const library = [`horizontal`, `obstinate`, `terrifying`, `negligence`, `confirmation`, `hesitation`, `excellence`, `fantastic`];

// Function that writes initial spaces to console before running new Word - NOT SURE IF I NEED THIS
// let wordSelect = function() {
//     if(library.length > 0) {
//         let currentWord = library[0];
//         console.log(currentWord);
//         let underscores = [];
//         let currentString = currentWord.split('');
//         for(let i = 0; i < currentString.length; i++) {
//             underscores.push(`_`);
//         }
//         console.log(underscores.join(' '));
//         library.shift();
//         wordSelect();
//     } else {
//         console.log(`
//         That's all the words!`);
//     }
// }

// wordSelect();
// let userInput;

// const askUser = function() {
//     inquirer
//         .prompt([
//             {
//                 name: "userInput",
//                 type: `input`,
//                 message: `Pick a letter!`
//             }
//     ])
//     .then(function(inquirerResponse) {
//         userInput = inquirerResponse.userInput;
//     })
// }

let startGame = function() {
    if(library.length > 0) {
        let currentWord = library[0];
        let newWord = new Word(currentWord);
        console.log(newWord);
        let consoleWord = newWord.wordString();
        console.log(`Testing concatWord ${consoleWord}
        `); 
        
    }
}

startGame();
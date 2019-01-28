const Words = require('./word.js');

const inquirer = require('inquirer');

const library = [`horizontal`, `obstinate`, `terrifying`, `negligence`, `confirmation`, `hesitation`, `excellence`, `fantastic`];


let wordSelect = function() {
    if(library.length > 0) {
        let currentWord = library[0];
        console.log(currentWord);
        let underscores = [];
        let currentString = currentWord.split('');
        for(let i = 0; i < currentString.length; i++) {
            underscores.push(`_`);
        }
        console.log(underscores.join(' '));
        library.shift();
        wordSelect();
    } else {
        console.log(`
        That's all the words!`);
    }
}

wordSelect();
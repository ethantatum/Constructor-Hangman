const Letters = require('./letter.js');

const Word = function(selectedWord, userInput) {
    // An array of new Letter objects representing the letters of the underlying word
        this.wordLetters = selectedWord.split(' ').map(function(letter){
            return new Letters(letter);
        });
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together
        this.wordString = this.wordLetters.join();
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
        this.userGuess = function(userInput) {
            this.wordLetters.map(this.userGuess(userInput));
            return
        }
}

module.exports = Word;
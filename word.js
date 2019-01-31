const Letters = require('./letter.js');



let Word = function(selectedWord) {
    // An array of new Letter objects representing the letters of the underlying word
        this.wordLetters = selectedWord.split('').map(function(letter){
            return new Letters(letter);
        });
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together
        this.wordString = function() {
            let wordArray = this.wordLetters.map(function(letterObj){
                return letterObj.returnSymbol();
            });
            return wordArray.join(` `);
        }
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
        this.wordGuess = function(userInput) {
            this.wordLetters.map(function(letterObj) {
                letterObj.userGuess(userInput)
            }); 
            this.wordLetters.map(letterObj => letterObj.returnSymbol());
            return this.wordLetters;
        }
}

module.exports = Word;
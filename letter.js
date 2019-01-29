// Constructor function for creating underscores or inserting correctly guessed letters
const Letters = function(correctLetter, userInput) {
    // A string value to store the underlying character for the letter
    this.character = '';
    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.returnSymbol = function() {
            if(this.guessed === true) {
                this.character = userInput;
            } else {
                this.character = `_`;
            }
    };
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.userGuess = function(correctLetter, userInput) {
        if(userInput === correctLetter) {
            this.guessed = true;
        }
    };
}

module.exports = Letters;
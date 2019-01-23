// Constructor function for creating underscores or inserting correctly guessed letters
const Letters = function(userInput) {
    // A string value to store the underlying character for the letter
    this.character = character;
    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.returnSymbol = function() {
            if(this.guessed === true) {
                return character;
            } else {
                return `_`;
            }
    };
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.userGuess = function(userInput) {
        if(userInput === this.character) {
            this.guessed = true;
        }
    };
}

module.exports = Letters;
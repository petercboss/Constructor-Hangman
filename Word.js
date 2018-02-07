const Letter = require('./Letter.js');

let Word = function(word) {
    this.word = word;
    this.currentWord = [];
    this.right = false;
    this.createLetters = function(word) {
        for (i = 0; i < this.word.length; i++) {
            this.currentWord.push(new Letter(this.word[i]));
        };
    };
    this.letterGuess = function(letterGuess) {
        for (i = 0; i < this.currentWord.length; i++) {
            if (this.currentWord[i].letter === letterGuess) {
                this.right = true;
                this.currentWord[i].guessed = true;
            };
        };
        if (this.currentWord.every(function(letter) {
            return letter.guessed
        })) return true;
    };
    this.showBlanks = function(currentWord) {
        let string = '';
        for (i = 0; i < this.currentWord.length; i++) {
            string += this.currentWord[i].letterGuessed();
        };
        console.log(string);
    };
};

module.exports = Word;
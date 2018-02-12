const Letter = require('./Letter.js');

let Word = function(word) {
    this.word = word.split('');
    this.currentWord = [];
    this.right = false;
    this.createLetters = word => {
        this.word.forEach(i => {this.currentWord.push(new Letter(i))});
    };
    this.letterGuess = letterGuess => {
        this.currentWord.forEach(i => {
            if (i.letter === letterGuess) {
                this.right = true;
                i.guessed = true;
            };
        });
        if (this.currentWord.every(letter => {
            return letter.guessed
        })) return true;
    };
    this.showBlanks = currentWord => {
        let showWord = '';
        this.currentWord.forEach(i => {
           showWord += i.letterGuessed();
        });
       console.log(showWord);
    };
};

module.exports = Word;
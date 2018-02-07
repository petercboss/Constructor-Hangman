let Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;
    this.letterGuessed = function() {
        if (this.guessed) {
            return this.letter;
        };
        return '_ ';
    };  
};

module.exports = Letter;
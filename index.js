const inquirer = require('inquirer');
const chalk = require('chalk');
const Word = require('./Word.js');

let words = ['hydrangea', 'poinsettia', 'rhododendron', 'begonia', 'snapdragon', 'calendula', 'daffodil', 'orchid'];

let currentWord = '';
let guessesLeft = 10;

let newWord = function() {
    if (words.length === 0) {
      console.log(chalk.green(`YOU WIN!!!!`));
      return;
    };
    guessesLeft = 10;
    let random = Math.floor(Math.random() * words.length);
    let randomWord = words[random];
    words.splice(random, 1);
    currentWord = new Word(randomWord);
    currentWord.createLetters();
    guessing();
};

let guessing = function() {
    currentWord.showBlanks();
    inquirer.prompt([
      {
          name: 'guess',
          message: `Guess A Flower Petal:`,
          type: 'input',
          validate: function validateGuess(name){
            return name !== '' && name.length === 1 && /[a-z]/i.test(name);;
          }   
      }
    ]).then(letter => {
      currentWord.letterGuess(letter.guess.toLowerCase());
      if (currentWord.right === true) {
        console.log(chalk.green(`Correct!`));
        currentWord.right = false;
        if (currentWord.letterGuess()) {
          console.log(chalk.green(`${currentWord.word.join('')}! You got it!!!`));
          newWord();
        }
        else {
        guessing();
        };
      }
      else {
        guessesLeft--;
        if (guessesLeft === 0) {
          console.log(chalk.red(`You Lose!!`));
          return;
        }
        console.log(chalk.red(`Wrong! Guesses Remaining: ${guessesLeft}`));
        guessing();
      };
    });

};

inquirer.prompt([
  {
      name: 'start',
      message: `Ready for Floral Hangman?!!`,
      type: 'confirm',
      default: true
  }
]).then(game => {
  if (game.start) {
      newWord();
  };
});
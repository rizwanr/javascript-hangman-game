//
const Hangman = function(word, remainingGuesses) {
  (this.word = word.toLowerCase().split('')),
    (this.remainingGuesses = remainingGuesses),
    (this.guessedLetters = []);
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = '';
  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  });

  return puzzle;
};

Hangman.prototype.makeGuess = function(guessedLetter) {
  const isUnique = this.word.includes(guessedLetter);
  const isBadGuess = !guessedLetter.includes(this.word, 0);
  if (isUnique) {
    this.guessedLetters.push(guessedLetter);
    console.log(this.guessedLetters);
  } else {
    if (isBadGuess) {
      this.remainingGuesses--;
    }
  }
};

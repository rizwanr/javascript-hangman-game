//
const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  console.log(this.word);
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = 'playing';
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

Hangman.prototype.getStatus = function() {
  let finished = true;
  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter)) {
      finished = true;
    } else {
      finished = false;
      console.log('finishhed');
    }
  });

  if (this.remainingGuesses === 0) {
    this.status = 'failed';
    console.log('failed ');
  } else if (finished) {
    this.status = 'finished';
  } else {
    this.status = 'playing  ';
  }
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

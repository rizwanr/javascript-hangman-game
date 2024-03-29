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

Hangman.prototype.calculateStatus = function() {
  let finished = true;
  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter)) {
    } else {
      finished = false;
    }
  });

  if (this.remainingGuesses === 0) {
    this.status = 'failed';
  } else if (finished) {
    this.status = 'finished';
  } else {
    this.status = 'playing';
  }
};

Hangman.prototype.getStatusMessage = function() {
  if (this.status === 'playing') {
    return `Guesses left: ${this.remainingGuesses}`;
  } else if (this.status === 'failed') {
    return `Nice try ! The word was "${this.word.join('')}".`;
  } else {
    return `Great work! You gussed the word`;
  }
};

Hangman.prototype.makeGuess = function(guessedLetter) {
  const isUnique = !this.guessedLetters.includes(guessedLetter);
  const isBadGuess = !this.word.includes(guessedLetter);

  if (this.status !== 'playing') {
    return;
  }
  if (isUnique) {
    this.guessedLetters.push(guessedLetter);
  }

  if (isBadGuess && isUnique) {
    this.remainingGuesses--;
  }

  this.calculateStatus();
};

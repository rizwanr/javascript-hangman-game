const puzzelEl = document.querySelector('#puzzle');
const remainingGuessesEl = document.querySelector('#remaning-guesses');

const game1 = new Hangman('Cat', 3);

puzzelEl.textContent = game1.getPuzzle();

//add keypresss funtionality
window.addEventListener('keypress', function(event) {
  var guess = String.fromCharCode(event.charCode);
  game1.makeGuess(guess);
  puzzelEl.textContent = game1.getPuzzle();
});

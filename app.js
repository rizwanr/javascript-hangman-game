const puzzelEl = document.querySelector('#puzzle');
const remainingGuessesEl = document.querySelector('#remaning-guesses');

const game1 = new Hangman('Cat', 3);

puzzelEl.textContent = game1.getPuzzle();
console.log(game1.status);
remainingGuessesEl.textContent = game1.getStatusMessage();

//add keypresss funtionality
window.addEventListener('keypress', function(event) {
  var guess = String.fromCharCode(event.charCode);
  game1.makeGuess(guess);
  puzzelEl.textContent = game1.getPuzzle();
  console.log(game1.status);
  console.log(game1.getStatusMessage());
  remainingGuessesEl.textContent = game1.getStatusMessage();
});

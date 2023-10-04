// The array of words to be used in Anagram Hunt
let words = ['stars', 'space', 'laser', 'planet', 'galaxy'];

// Initialize the game variables
let gameWord, guesses, wrongGuesses;

// Function to start the anagram game
const startGame = () => {
  // Select a random word from the array
  gameWord = words[Math.floor(Math.random() * words.length)];
  // Initialize the promises and wrong guesses
  guesses = '';
  wrongGuesses = [];
}

// When the guess form is submitted
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  // Get the guess from the form
  let guess = document.querySelector('input').value;
  // Store and display the guess
  guesses += guess;
  let guessedLetters = guesses.split('');
  displayGuesses(guessedLetters);
  // Check if the guess is correct and reset the form
  if (gameWord === guess) {
    alert('You guessed the word!');
    startGame();
  } else {
    wrongGuesses.push(guess);
    document.querySelector('form').reset();
  }
  // Check if the game is over
  if (wrongGuesses.length >= 3) {
    alert('You lost!');
    startGame();
  }
});

// Function to display the guessed letters
const displayGuesses = (guessedLetters) => {
  let output = '';
  // Loop over the gameWord
  for (let i = 0; i < gameWord.length; i++) {
    // Check if letter is in the guessedLetters array
    if (guessedLetters.includes(gameWord[i])) {
      output += gameWord[i] + ' ';
    } else {
      output += '_ ';
    }
  }
  // Add the wrong guesses and update the anagram-hunt div
  document.querySelector('#anagram-hunt').innerHTML = output + '</br> Wrong guesses: ' + wrongGuesses;
}

// Start the game on page load
startGame();


const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInputGuess = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
// Array will contain all the letters the player guesses
const guessedLettersArray = []; 

// Write a function to add placeholders for each letter
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

// Guess button

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    // Empty text of message element
    message.innerText = "";
    // Grab what was entered in the input
    const guess = textInputGuess.value;
    // Validate that input was single letter
    const goodGuess = validateInput(guess); //validateInput formerly inputValue (too confusing)
    
    if (goodGuess) {
        makeGuess(guess);
    }
    textInputGuess.value = "";
});

// Create a function to check player's input

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/; // regular expression code!
    if (input.length === 0) {
        message.innerText = "Try typing a letter to start guessing the word!";
    } else if (input.length > 1) {
        message.innerText = "One letter at a time, please!";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z!";
    } else {
        return input;
    }
};

// Create a new function to accept a letter as a parameter

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLettersArray.includes(guess)) {
        message.innerText = "You already guessed that letter! Try again :)";
    } else {
        guessedLettersArray.push(guess);
        console.log(guessedLettersArray);
    }
};



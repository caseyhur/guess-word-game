
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

// Function to check player's input
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

// Function to accept a letter as a parameter
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLettersArray.includes(guess)) {
        message.innerText = "You already guessed that letter! Try again :)";
    } else {
        guessedLettersArray.push(guess);
        console.log(guessedLettersArray);
        showGuessedLetters();
        updateWordInProgess(guessedLettersArray);
    }
};

// Function to show guessed letters
const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLettersArray) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

// Function to update the word in progress
const updateWordInProgess = function (guessedLettersArray) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    console.log(wordArray);
    for (const letter of wordArray) {
        if (wordArray.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }     
    }
    console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    checkIfWon();
};

const checkIfWon = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
};
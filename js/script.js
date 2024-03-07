
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInputGuess = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesDisplay = document.querySelector(".remaining span");
const emptyParagraph = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

// Write a function to add placeholders for each letter

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log("letter");
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

// Event listener for guess button

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const input = textInputGuess.value;
    console.log(input);
    textInputGuess.value = "";
});
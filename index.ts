import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function guessNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame() {
    console.log("Welcome to the Number Guessing Game!");
    console.log("Think of a number between 1 and 100.");

    let min = 1;
    let max = 100;
    let guess: number;
    
    function makeGuess() {
        guess = guessNumber(min, max);
        rl.question(`Is your number ${guess}? (yes, higher, lower) `, (answer) => {
            if (answer.toLowerCase() === 'yes') {
                console.log(`Hooray! I guessed your number: ${guess}`);
                rl.close();
            } else if (answer.toLowerCase() === 'higher') {
                min = guess + 1;
                makeGuess();
            } else if (answer.toLowerCase() === 'lower') {
                max = guess - 1;
                makeGuess();
            } else {
                console.log("Please enter 'yes', 'higher', or 'lower'.");
                makeGuess();
            }
        });
    }

    makeGuess();
}

startGame();
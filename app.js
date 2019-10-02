import compareNumbers from './compareNumbers.js';

let score = 0;
let guessesLeft = 4;
let highLow = ' ';
let secretNumber = 0;

document.getElementById('submit-guess').disabled = true;
document.getElementById('guess').disabled = true;

document.getElementById('play').addEventListener('click', playNewGame);
document.getElementById('submit-guess').addEventListener('click', sumbitGuess);


function playNewGame(){   
    document.getElementById('chances-left').textContent = guessesLeft;
    document.getElementById('win-lose').textContent = ' ';

    document.getElementById('play').disabled = true;
    document.getElementById('submit-guess').disabled = false;
    document.getElementById('guess').disabled = false;
    
    secretNumber = Math.floor(Math.random() * 20) + 1;    
}

function sumbitGuess() {
    guessesLeft -= 1;
    document.getElementById('chances-left').textContent = guessesLeft;
    
    if (guessesLeft === 0) {
        score -= 10;
        document.getElementById('win-lose').textContent = 'GAME OVER!';
        gameOver();
    }   
    
    const guess = document.getElementById('guess').value;
    const guessStatus = compareNumbers(guess, secretNumber);
    
    if (guessStatus === 1) {
        highLow = 'Too High';
    } else if (guessStatus === -1) {
        highLow = 'Too Low';
    } else if (guessStatus === 0){
        document.getElementById('win-lose').textContent = 'WINNER!';
        score += 10;
        gameOver();
    }
    document.getElementById('user-high-low').textContent = highLow;
}
    
    
function gameOver() {
    guessesLeft = 4;
    
    document.getElementById('score').textContent = score;
    
    document.getElementById('submit-guess').disabled = true;
    document.getElementById('guess').disabled = true;
    document.getElementById('play').disabled = false;
}
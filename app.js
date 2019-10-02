import compareNumbers from './compareNumbers.js';

let score = 0;
let guessesLeft = 4;
let highLow = ' ';
let secretNumber = 0;

document.getElementById('submit-guess').disabled = true;
document.getElementById('guess').disabled = true;

//create a play button that starts the game
document.getElementById('play').addEventListener('click', playNewGame);

//track total points for consecutive plays

function playNewGame(){
    guessesLeft = 4;
    highLow = ' ';

    document.getElementById('play').disabled = true;
    document.getElementById('submit-guess').disabled = false;
    document.getElementById('guess').disabled = false;

    secretNumber = Math.floor(Math.random() * 20) + 1;
    console.log('random:' + secretNumber);

    document.getElementById('submit-guess').addEventListener('click', sumbitGuess);

    function sumbitGuess(){
        guessesLeft -= 1;
        document.getElementById('chances-left').textContent = guessesLeft;
        if (guessesLeft < 0) {
            document.getElementById('submit-guess').disabled = true;
            score -= 10;
        }
        
        
        const guess = document.getElementById('guess').value;
        const guessStatus = compareNumbers(guess, secretNumber);
        
        if (guessStatus === true) {
            highLow = 'Too High';
        } else if (guessStatus === false) {
            highLow = 'Too Low';
        } else {
            highLow = 'WINNER';
            score += 10;
            document.getElementById('score').textContent = score;
            document.getElementById('submit-guess').disabled = true;
            document.getElementById('guess').disabled = true;
            document.getElementById('play').disabled = false;
            console.log(guessesLeft)
        }
        document.getElementById('user-high-low').textContent = highLow;

    }


//create an input with a button to submit
    //each time the button is clicked it needs to evualate if high/low/winner

//create a countdown that also displays too high or too low.

//create winner conditions

//create losing conditions

//make sure you can play again w/o losing points

//make someting cool happen when you hit 100 points

}
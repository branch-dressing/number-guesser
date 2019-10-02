import compareNumbers from './compareNumbers.js';

let score = 0;

//create a play button that starts the game
document.getElementById('play').addEventListener('click', playNewGame);

//track total points for consecutive plays

function playNewGame(){
    let guessesLeft = 4;
    let highLow = ' ';

    //Creates a new random number
    const secretNumber = Math.floor(Math.random() * 20) + 1;
    console.log('random:' + secretNumber);

    document.getElementById('submit-guess').addEventListener('click', sumbitGuess);

    function sumbitGuess(){
        guessesLeft -= 1;
        document.getElementById('chances-left').textContent = guessesLeft;


        const guess = document.getElementById('guess').value;
        console.log("guess: " + guess);
        const guessStatus = compareNumbers(guess, secretNumber);
        
        if (guessStatus === true) {
            highLow = 'Too High';
        } else if (guessStatus === false) {
            highLow = 'Too Low';
        } else {
            highLow = 'WINNER';
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
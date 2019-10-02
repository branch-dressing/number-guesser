function compareNumber(guess, secretNumber) {
    if (guess > secretNumber) {return 1;
    } else if (guess < secretNumber) {
        return -1;
    } else if (guess === secretNumber) {
        return 0;
    }
}   

export default compareNumber;
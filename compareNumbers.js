function compareNumber(guess, secretNumber) {
    if (guess > secretNumber) {return true;
    } else if (guess < secretNumber) {
        return false;
    }
}   

export default compareNumber;
function compareNumber(guess, secretNumber) {
    if (guess > secretNumber) {return true;
    } else if (guess < secretNumber) {
        return false;
    } else if (guess === secretNumber) {
        return 'win';
    }
}   

export default compareNumber;
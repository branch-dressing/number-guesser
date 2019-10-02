function compareNumber(guess, number) {
    if (guess > number) {return true;
    } else if (guess < number) {
        return false
    };
};

export default compareNumber;
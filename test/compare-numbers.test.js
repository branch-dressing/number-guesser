// IMPORT MODULES under test here:
// import example from '../src/example.js';

import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

test('should return true if guess is greater than 10', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 15;
    const secretNumber = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const results = compareNumbers(guess, secretNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, true);
});

test('should return false if guess is less than 10', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 8;
    const secretNumber = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const results = compareNumbers(guess, secretNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, false);
});

test('should return win if guess is equal to 10', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 10;
    const secretNumber = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const results = compareNumbers(guess, secretNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, 'win');
});

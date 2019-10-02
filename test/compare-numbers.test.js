// IMPORT MODULES under test here:
// import example from '../src/example.js';

import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

test('should return 1 if guess is greater than 10', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 15;
    const secretNumber = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const results = compareNumbers(guess, secretNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, 1);
});

test('should return -1 if guess is less than 10', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 8;
    const secretNumber = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const results = compareNumbers(guess, secretNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, -1);
});

test('should return 0 if guess is equal to 10', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 10;
    const secretNumber = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const results = compareNumbers(guess, secretNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, 0);
});

'use strict';

// generate a random number between 1 and 100
let number = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  // get the number from input field
  const guess = Number(document.querySelector('.guess').value);
  // if there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
    // if the user wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    // note: for the attribute that has two words, we can't use kebab case, we use camel case instead
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // if guess is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      // take one score out each time the guess is wrong
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // if guess is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      // take one score out each time the guess is wrong
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

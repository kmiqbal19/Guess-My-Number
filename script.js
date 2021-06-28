'use strict';

//Create Random Number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;
// Create score and highscore variable
let score = 20;
let highScore = 0;
// Select different Items

// Creating AddEventListener for check button click
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!! ⛔';
  } else if (score <= 1) {
    document.querySelector('.message').textContent = '🧨Game Over!🧨 ';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct!! You Win🥇🏆🥉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = Math.trunc(
    Math.random() * 20 + 1
  );
});

// See the final version for refactoring from jonas file

'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = Number(document.querySelector('.score').textContent)
let highScore = 0

const displayMessage = message => {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess)

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No number!'
        // When the guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
            score--
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('💥 You lost the game!')
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = '#b93030'
        }
        // When player wins 
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber
        displayMessage('🎉 Correct Number!')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        if (score > highScore) highScore = score
        document.querySelector('.highscore').textContent = highScore
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20
    document.querySelector('.score').textContent = score
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.number').textContent = '?'
    displayMessage('Start guessing...')
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.highscore').textContent = highScore
})
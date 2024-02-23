// Get elements
const playerNameInput = document.querySelector('.input-name-div input');
const roundsInput = document.querySelector('.input-round-div input');
const gameContainer = document.getElementById('game-container');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const heroMention = document.querySelector('.hero');
const contentHeader = document.querySelector('#content-header');
const inputSection = document.querySelector('.input-sect');


// Game variables
let playerName = '';
let rounds = 0;
let playerScore = 0;
let computerScore = 0;


function onRockButtonClick() {
    playGame('rock');
}

function onPaperButtonClick() {
    playGame('paper');
}

function onScissorsButtonClick() {
    playGame('scissors');
}


// Start the game when the input button is clicked
document.querySelector('.chevron-btn-wrapper').addEventListener('click', function setUp() {
    // Get player name and rounds from inputs
    playerName = playerNameInput.value.charAt(0).toUpperCase() + playerNameInput.value.slice(1).toLowerCase();

    rounds = parseInt(roundsInput.value);

    // Check if rounds is an odd number
    if (!isNaN(rounds) && rounds % 2 === 0) {
        return alert('Rounds must be an odd number');
    }
    // Check if inputs are valid
    else if (playerName && !isNaN(rounds) && rounds > 0) {
        // alert(`Hello, ${playerName}! Let's start the game!`);
        // Event listeners

        rockButton.addEventListener('click', onRockButtonClick);
        paperButton.addEventListener('click', onPaperButtonClick);
        scissorsButton.addEventListener('click', onScissorsButtonClick);

        gameContainer.style.display = 'flex';
        heroMention.textContent = `Welcome ${playerName}`
        inputSection.style.display = 'none'

        
    } else {
        alert('Please enter valid values for Name and Rounds.');
    }
});




// Function to update scores
function updateScores() {
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    const playerNameElement = document.getElementById('player-name');


    playerScoreElement.textContent = `${playerScore}`;
    computerScoreElement.textContent = `${computerScore}`;

    playerNameElement.textContent = playerName;
    computerNameElement.textContent = 'Comp.';
}



// Function to play the game
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // // Determine the winner
    if (playerChoice === computerChoice) {
        alert('It\'s a tie!');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        alert(`You win! ${playerChoice} beats ${computerChoice}`); // Player wins
        playerScore++;
    } else {
        alert(`Computer wins! ${computerChoice} beats ${playerChoice}`); // Computer wins 
        computerScore++;
    }

    // Update scores
    updateScores();

    // Check if the game is over
    if (--rounds === 0) {
        alert('Game Over!');

        if (playerScore > computerScore) {
            contentHeader.textContent = `Congratulations ${playerName}! You won the game!`
            return contentHeader.style.animation = 'bounce 1s ease-in-out infinite alternate';
        } else if (playerScore < computerScore) {
            contentHeader.textContent = `Computer won the game!`
            return contentHeader.style.animation = 'fadeIn 2s ease-in-out infinite alternate';
        } else {
            return contentHeader.style.animation = 'fadeIn 2s ease-in forwards'; // Handle tie game
        }
    }

}



// Function to update scores
function updateScores() {
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    const playerNameElement = document.getElementById('player-name');
    const computerNameElement = document.querySelector('.computer-name');

    playerScoreElement.textContent = `${playerScore}`;
    computerScoreElement.textContent = `${computerScore}`;

    playerNameElement.textContent = playerName;
    computerNameElement.textContent = 'Comp.';
}



// Function to play the game
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Determine the winner
    if (playerChoice === computerChoice) {
        // It's a tie
        alert('It\'s a tie!');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        // Player wins
        alert(`You win! ${playerChoice} beats ${computerChoice}`);
        playerScore++;
    } else {
        // Computer wins
        alert(`Computer wins! ${computerChoice} beats ${playerChoice}`);
        computerScore++;
    }

    // Update scores
    updateScores();

    // Check if the game is over
    if (--rounds === 0) {
        alert('Game Over!');

        // Disable buttons
        rockButton.removeEventListener('click', onRockButtonClick);
        paperButton.removeEventListener('click', onPaperButtonClick);
        scissorsButton.removeEventListener('click', onScissorsButtonClick);

        if (playerScore > computerScore) {
            contentHeader.textContent = `Congratulations ${playerName}! You won the game!`
            return contentHeader.style.animation = 'bounce 1s ease-in-out infinite alternate';
        } else if (playerScore < computerScore) {
            contentHeader.textContent = `Computer won the game!`
            return contentHeader.style.animation = 'fadeIn 2s ease-in-out infinite alternate';
        } else {
            contentHeader.textContent = `It's a tie!`
            return contentHeader.style.animation = 'fadeIn 2s ease-in-out infinite alternate';
        }
    }
}
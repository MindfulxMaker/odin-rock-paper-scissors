let humanScore = 0;
let computerScore = 0;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const display = document.querySelector('.display');

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        display.innerHTML += `<p>It's a tie!</p>`;
    } else if ((humanChoice === 'paper') && (computerChoice === 'rock')) {
        humanScore++;
        display.innerHTML += 
            `<p>You win! Your score: ${humanScore}, Computer score: ${computerScore}</p>`;
    } else if ((humanChoice === 'rock') && (computerChoice === 'scissors')) {
        humanScore++;
        display.innerHTML += 
            `<p>You win! Your score: ${humanScore}, Computer score: ${computerScore}</p>`;
    } else if ((humanChoice === 'scissors') && (computerChoice === 'paper')) {
        humanScore++;
        display.innerHTML += 
            `<p>You win! Your score: ${humanScore}, Computer score: ${computerScore}</p>`;
    } else if ((computerChoice === 'paper') && (humanChoice === 'rock')) {
        computerScore++;
        display.innerHTML += 
            `<p>You lose! Your score: ${humanScore}, Computer score: ${computerScore}</p>`;
    } else if ((computerChoice === 'rock') && (humanChoice === 'scissors')) {
        computerScore++;
        display.innerHTML += 
            `<p>You lose! Your score: ${humanScore}, Computer score: ${computerScore}</p>`;
    } else if ((computerChoice === 'scissors') && (humanChoice === 'paper')) {
        computerScore++;
        display.innerHTML += 
            `<p>You lose! Your score: ${humanScore}, Computer score: ${computerScore}</p>`;
    }
    finsishGame();
}

const finsishGame = () => {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            display.innerHTML += `<b>CONGRATULATION!! YOU ARE THE WINNER!</b>`;
        } else {
            display.innerHTML += `<b>YOU LOSE!! BETTER LUCK NEXT TIME!</b>`;
        }
        // Reset the game
        humanScore = 0;
        computerScore = 0;
    }
    
}

btnRock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
btnPaper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});
btnScissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});




function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    let result = "";
    (random === 1)
        ? result = "rock"
        : (random === 2)
            ? result = "paper"
            : result = "scissors"
    return result;
}




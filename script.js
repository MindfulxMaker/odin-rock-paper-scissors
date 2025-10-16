
function getComputerChoice() {
    // Create a variable for storing random number from 1 to 3
    const random = Math.floor(Math.random() * 3) + 1;
    
    // IF random === 1 return "rock", 
    //   IF random === 2 return "paper"
    //     IF random === 3 return "scissors"
    return random === 1 ? "rock"
                            : random === 2 ? "paper" 
                            : "scissors"
}

function getHumanChoice() {
    const answer = prompt("What is your choice? Rock, Paper of Scissors?").toLowerCase();

    console.log(`HUMAN: ${answer}`);

    return answer;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;  

    const playRound = (humanChoice, computerChoice) => {
        let msg = "";
        console.log(humanChoice, computerChoice);
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                msg = "Tie!";
            } else if (computerChoice === "paper") {
                msg = "You lose! Paper beats Rock.";
                computerScore++;
            } else {
                msg = "You win! Rock beats Scissors.";
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                msg = "You win! Paper beats Rock.";
                humanScore++;
            } else if (computerChoice === "paper") {
                msg = "Tie!";
            } else {
                msg = "You lose! Scissors beats Paper.";
                computerScore++;
            }
        } else {
            if (computerChoice === "rock") {
                msg = "You lose! Rock beats Scissors.";
                computerScore++;
            } else if (computerChoice === "paper") {
                msg = "You win! Scissors beats Paper."
                humanScore++;
            } else {
                msg = "Tie";
            }
        }
        
        // Write the result to the console
        console.log(msg);
    }   

    // Play round
    // let humanSelection = getHumanChoice();
    // let computerSelection = getComputerChoice();

    // playRound(humanSelection, computerSelection);

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    
}

playGame();
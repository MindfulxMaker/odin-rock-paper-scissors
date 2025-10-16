let humanScore = 0;
let computerScore = 0;


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

    console.log(answer);
}

function playRound(humanChoice, computerChoice) {
    
}
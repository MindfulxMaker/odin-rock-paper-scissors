var humanScore = 0;
var computerScore = 0;


function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    let result = "";
    (random === 1)
        ? result = "rock"
        : (random === 2)
            ? result = "paper"
            : result = "scissors"
    console.log(result);
    return result;
}

function getHumanChoice() {
    const result = prompt('What is your choice?');
    console.log(result);
}
getComputerChoice();
getHumanChoice();
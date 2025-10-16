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

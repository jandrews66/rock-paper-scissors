let computerScore = 0;
let userScore = 0;

function getUserChoice() { 
    userChoice = prompt("Enter rock, paper or scissors").toLowerCase();

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
     
    } else { 
        userChoice = prompt("Invalid choice, please enter rock, paper or scissors").toLowerCase();
    }
    return userChoice;
}

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) { 
        computerChoice = "rock"
    } else if (randomNumber === 2) {
        computerChoice = "paper"
    } else if (randomNumber === 3) {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function playRound() {
    getComputerChoice();
    getUserChoice();
    const displayChoices = " Computer played " + computerChoice + " and " + "User played " + userChoice + "."
   if (computerChoice === "rock" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "paper" || computerChoice === "paper" && userChoice === "rock") {
        console.log("Computer wins!" + displayChoices);
        computerScore += 1;  
    } else if (computerChoice === userChoice) {
        console.log("Draw!" + displayChoices);
    } else {
        console.log("You win!" + displayChoices);
        userScore += 1;
    }

}

(function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Round " + (i+1) + " - Computer: " + computerScore + " vs User: " + userScore);
     }
    console.log("Game over! Final Score - Computer: " + computerScore + " vs User: " + userScore);
    
    if (computerScore > userScore) {
        console.log("Computer wins the game!");
    } else if (userScore > computerScore) {
        console.log("User wins the game!");
    } else {
        console.log("The game is a tie");
    }
}())


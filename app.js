
userChoice = prompt("Enter rock, paper or scissors").toLowerCase();

if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    
} else { 
    userChoice = prompt("Invalid choice, please enter rock, paper or scissors").toLowerCase();
}

console.log(userChoice);

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) { 
        computerChoice = "rock"
    } else if (randomNumber === 2) {
        computerChoice = "paper"
    } else if (randomNumber === 3) {
        computerChoice = "scissors"
    }
    console.log(computerChoice);
}

function playRound(computerChoice, userChoice) {
   if (computerChoice === "rock" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "paper" || computerChoice === "paper" && userChoice === "rock") {
        console.log("Computer wins");
    } else if (computerChoice === userChoice) {
        console.log("Draw");
    } else {
        console.log("You win");
    }

   console.log(computerChoice + " " + userChoice);
}

function game
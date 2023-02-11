let computerScore = 0;
let userScore = 0;

const buttons = document.getElementsByTagName("button");
const buttonPressed = e => {
    userChoice = e.target.id;
            playRound();
        
  }
  for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
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
    
    const choices = " Computer played " + computerChoice + " and " + "User played " + userChoice + "."

    if (computerChoice === "rock" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "paper" || computerChoice === "paper" && userChoice === "rock") {
        document.querySelector("#choices").textContent = "Computer wins this round!" + choices;
        computerScore += 1;  
        document.querySelector("#computer").textContent = "Computer: " + computerScore;

    } else if (computerChoice === userChoice) {
        document.querySelector("#choices").textContent = "This round was a Draw!" + choices;

    } else {
        document.querySelector("#choices").textContent = "User wins this round!" + choices;
        userScore += 1;
        document.querySelector("#user").textContent = "User: " + userScore;

    }
    checkScore();
}

function checkScore() {
    if (userScore === 5) {
        document.querySelector("#end").textContent = "YOU WIN!"
        for (let button of buttons) {
            button.disabled = true;
        }
    } else if (computerScore === 5 ) {
        document.querySelector("#end").textContent = "COMPUTER WINS!"
        for (let button of buttons) {
            button.disabled = true;
        }
  } 

  }

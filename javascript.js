function getComputerChoice() {
    let computerChoice = Math.random() * 3;
    if (computerChoice < 1) {
        return "rock";
    }   else if (computerChoice < 2) {
        return "paper";
    }   else {
        return "scissors";
    }
    } 

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    if (humanChoice.toLowerCase() === "rock") {
        return "rock";
    }   else if (humanChoice.toLowerCase() === "paper") {
        return "paper";
    }   else if (humanChoice.toLowerCase() === "scissors") {
        return "scissors";
        }
    } 

function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            console.log("Rock = rock, draw!");
            return "";
        }
        else if (humanChoice === "paper") {
            console.log("Paper beats rock, you won!");
            return "human"; 
        }
        else if (humanChoice === "scissors") {
            console.log("Rock beats scissors, you lost!");
            return "computer"; 
        }
    }
    if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            console.log("Paper beats rock, you lost!");
            return "computer";
        }
        else if (humanChoice === "paper") {
            console.log("Paper = paper, draw!");
            return "";    
        }
        else if (humanChoice === "scissors") {
            console.log("Scissors beats paper, you won!");
            return "human";
        }
    }
    if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            console.log("Rock beats scissors, you won!");
            return "human";
        }
        else if (humanChoice === "paper") {
            console.log("Scissors beats paper, you lost!");
            return "computer";
        }
        else if (humanChoice === "scissors") {
            console.log("Scissors = scissors, draw!");
            return "";
        }
    }
} 

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let winner = ""; 
    for (let i = 1; i <=5; i++) {
        winner = playRound(getComputerChoice(), getHumanChoice());
        if (winner === "computer") {
            computerScore++;
        }   else if (winner === "human") {
            humanScore++;
        }
    }
    console.log("The result is: Computer " + computerScore + ":" + humanScore + " Human.");
}

playGame();
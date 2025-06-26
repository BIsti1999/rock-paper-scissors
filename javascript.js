function getComputerChoice() {
    let n = Math.random() * 3;
    if (n < 1) {
        return "rock";
    }   else if (n < 2) {
        return "paper";
    }   else {
        return "scissors";
    }
    } 

function getHumanChoice() {
    let n = prompt("Rock, paper or scissors?");
    if (n.toLowerCase() === "rock") {
        return "rock";
    }   else if (n.toLowerCase() === "paper") {
        return "paper";
    }    else if (n.toLowerCase() === "scissors") {
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
    let n = ""; 
    for (let i = 1; i <=5; i++) {
        n = playRound(getComputerChoice(), getHumanChoice());
        if (n === "computer") {
            computerScore++;
        }   else if (n === "human") {
            humanScore++;
        }
    }
    console.log("The result is: Computer " + computerScore + ":" + humanScore + " Human.");
}

playGame();
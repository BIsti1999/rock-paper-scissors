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

function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            result.textContent = "Draw! Rock = rock!";
            container.insertBefore(result, finalResult);
            return "";
        }
        else if (humanChoice === "paper") {
            result.textContent = "You won! Paper beats rock!";
            container.insertBefore(result, finalResult);
            return "human"; 
        }
        else if (humanChoice === "scissors") {
            result.textContent = "You lost! Rock beats scissors!";
            container.insertBefore(result, finalResult);
            return "computer"; 
        }
    }
    if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            result.textContent = "You lost! Paper beats rock!";
            container.insertBefore(result, finalResult);
            return "computer";
        }
        else if (humanChoice === "paper") {
            result.textContent = "Draw! Paper = paper!";
            container.insertBefore(result, finalResult);
            return "";    
        }
        else if (humanChoice === "scissors") {
            result.textContent = "You won! Scissors beats paper!";
            container.insertBefore(result, finalResult);
            return "human";
        }
    }
    if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            result.textContent = "You won! Rock beats scissors!";
            container.insertBefore(result, finalResult);
            return "human";
        }
        else if (humanChoice === "paper") {
            result.textContent = "You lost! Scissors beats paper!";
            container.insertBefore(result, finalResult);
            return "computer";
        }
        else if (humanChoice === "scissors") {
            result.textContent = "Draw! Scissors = scissors!";
            container.insertBefore(result, finalResult);
            return "";
        }
    }
} 

let humanScore = 0;
let computerScore = 0;
const container = document.querySelector("div");
const finalResult = document.createElement("div");
finalResult.textContent = "***";
container.appendChild(finalResult);
const result = document.createElement("div");
result.textContent = "Waiting for your choice!";
container.insertBefore(result, finalResult);
const content = document.createElement("div");
content.textContent = "HUMAN " + humanScore + ":" + computerScore + " COMPUTER";
container.insertBefore(content, result);


let winner = "";
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        winner = (playRound(getComputerChoice(), button.id));
        if (winner === "human") {
            content.textContent = "HUMAN " + ++humanScore + ":" + computerScore + " COMPUTER";
            container.insertBefore(content, result);
        } else if (winner === "computer") {
            content.textContent = "HUMAN " + humanScore + ":" + ++computerScore + " COMPUTER";
            container.insertBefore(content, result);
        }
        if (humanScore === 5) {
            finalResult.textContent = "You won the previous game! " + humanScore + ":" + computerScore;
            container.appendChild(finalResult);
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            finalResult.textContent = "You lost the previous game! " + computerScore + ":" + humanScore;
            container.appendChild(finalResult);
            humanScore = 0;
            computerScore = 0;
        };
        })
    });


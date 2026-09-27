var computerScore = 0;
var humanScore = 0;

let humanChoice = prompt("Enter Rock/Paper/Scissors: ");
let choice = Math.floor(Math.random() * 3);

function getComputerChoice() {
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

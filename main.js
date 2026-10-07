var computerScore = 0;
var humanScore = 0;
// test committers

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter Rock/Paper/Scissors: ");
  return humanChoice.toLowerCase();
}

function playRound(human, computer) {
  if (human === "rock" && computer === "rock") {
    console.log("Round Tie! Both chose Rock.");
  } else if (human === "paper" && computer === "paper") {
    console.log("Round Tie! Both chose Paper.");
  } else if (human === "scissors" && computer === "scissors") {
    console.log("Round Tie! Both chose Scissors.");
  } else if (human === "rock" && computer === "paper") {
    console.log("You lose! Paper beats rock.");
    computerScore += 1;
  } else if (human === "paper" && computer === "scissors") {
    console.log("You lose! Scissors beats Paper.");
    computerScore += 1;
  } else if (human === "scissors" && computer === "rock") {
    console.log("You lose! Rock beats Scissors.");
    computerScore += 1;
  } else if (human === "paper" && computer === "rock") {
    console.log("You win! Paper beats rock.");
    humanScore += 1;
  } else if (human === "scissors" && computer === "paper") {
    console.log("You win! Scissors beats Paper.");
    humanScore += 1;
  } else {
    console.log("You win! Rock beats Scissors.");
    humanScore += 1;
  }
}

function playGame() {
  while (computerScore < 4 && humanScore < 4) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final score, You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();

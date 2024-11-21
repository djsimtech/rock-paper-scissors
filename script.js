let humanScore = 0;
let computerScore = 0;

console.log("The current Human Score is:", humanScore);
console.log("The current Computer Score is:", computerScore);

// Function to generate a random choice for the computer
function getComputerChoice() {
  // Variable to generate a random number between 1 and 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log("The Random Number for this round is:", randomNumber);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let computerSelection = getComputerChoice();
console.log("The Computer Chose:", computerSelection);

// Function to Prompt user for input
function getHumanChoice() {
  // Variable containing valid choices
  const validChoices = ["rock", "paper", "scissors"];
  let input = prompt("Choose Rock, Paper, or Scissors");

  // Converts input to lowercase and validates that User provides a valid response without Typo's
  if (validChoices.includes(input.toLowerCase())) {
    console.log("Valid Choice!");
    // If Typo is Found re-run funciton
  } else {
    console.log("Invalid Choice.");
    return getHumanChoice();
  }
  // If valid choice, return choice
  return input.toLowerCase();
}

let humanSelection = getHumanChoice();

console.log("The Human Chose:", humanSelection);

function playRound(humanChoice, computerChoice) {
  if (humanSelection == "rock" && computerSelection == "rock") {
    return "Rock vs Rock = Tie! Play again";
  } else if (humanSelection == "rock" && computerSelection == "paper") {
    computerScore = ++computerScore;
    return "Computer Wins: Paper beats Rock!";
  } else if (humanSelection == "rock" && computerSelection == "scissors") {
    humanScore = ++humanScore;
    return "Human Wins: Rock beats Scissors!";
  } else if (humanSelection == "paper" && computerSelection == "paper") {
    return "paper vs paper = Tie! Play again";
  } else if (humanSelection == "paper" && computerSelection == "rock") {
    humanScore = ++humanScore;
    return "Human Wins: Paper beats Rock!";
  } else if (humanSelection == "paper" && computerSelection == "scissors") {
    computerScore = ++computerScore;
    return "Computer Wins: Scissors beats Paper!";
  } else if (humanSelection == "scissors" && computerSelection == "scissors") {
    return "Scissors vs Scissors = Tie! Play again";
  } else if (humanSelection == "scissors" && computerSelection == "rock") {
    computerScore = ++computerScore;
    return "Computer Wins: Rock beats Scissors!";
  } else if (humanSelection == "scissors" && computerSelection == "paper") {
    humanScore = ++humanScore;
    return "Human Wins: Scissors beats Paper!";
  }
}

console.log(playRound(humanSelection, computerSelection));
// console.log(playRound());
console.log("The current Human Score is:", humanScore);
console.log("The current Computer Score is:", computerScore);

// let randomNumber = Math.floor(Math.random() * 3) + 1;
// console.log(randomNumber);
// let choice = '';

// if (randomNumber === 1) {
//   choice = 'Rock';
//   console.log(choice);
// } else if (randomNumber === 2) {
//   choice = 'Paper';
//   console.log(choice);
// } else {
//   choice = 'Scissors';
//   console.log(choice);
// }

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log('The Random Number for this round is:', randomNumber);
  let choice = '';

  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

console.log('The Computer Chose:', getComputerChoice());

function getHumanChoice() {
  let input = prompt('Choose Rock, Paper, or Scissors');
  return input.toLocaleLowerCase();
}

console.log('The Human Chose:', getHumanChoice());

console.log('Current Human Score:', humanScore);
console.log('Current Computer Score:', computerScore);

function playRound(humanChoice, computerChoice) {}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

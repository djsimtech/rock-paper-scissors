// Main function for Rock Paper Scissors Game
function playGame() {
  // Initialize Score Variables
  let humanScore = 0;
  let computerScore = 0;

  // Displays current Score
  console.log('The current Human Score is:', humanScore);
  console.log('The current Computer Score is:', computerScore);

  // Function to carry out 1 round of play
  function playRound(humanChoice, computerChoice) {
    // Variable to store Computer Choice each round
    let computerSelection = getComputerChoice();

    // Variable to store Human Choice each round
    let humanSelection = getHumanChoice();
    console.log('The Human Chose:', humanSelection);

    // Function to generate a random choice for the computer
    function getComputerChoice() {
      // Variable to generate a random number between 1 and 3
      let randomNumber = Math.floor(Math.random() * 3) + 1;
      // console.log('The Random Number for this round is:', randomNumber);
      if (randomNumber === 1) {
        return 'rock';
      } else if (randomNumber === 2) {
        return 'paper';
      } else {
        return 'scissors';
      }
    }

    // Function to Prompt user for input and validate for typos
    function getHumanChoice() {
      // Variable containing valid choices
      const validChoices = ['rock', 'paper', 'scissors'];
      // Prompt the user for input
      let input = prompt('Choose Rock, Paper, or Scissors');

      // Converts input to lowercase and validates that User provides a valid response without Typo's
      if (validChoices.includes(input.toLowerCase())) {
        console.log('Valid Choice!');
      } else {
        // If Typo is Found re-run funciton
        console.log('Invalid Choice.');
        return getHumanChoice();
      }
      // If choice is valid, return choice
      return input.toLowerCase();
    }

    console.log('The Computer Chose:', computerSelection);
    // game logic
    if (humanSelection == 'rock' && computerSelection == 'rock') {
      console.log('Rock vs Rock = Tie! Play again');
      console.log('The current Human Score is:', humanScore);
      console.log('The current Computer Score is:', computerScore);
      return playRound();
    } else if (humanSelection == 'rock' && computerSelection == 'paper') {
      computerScore = ++computerScore;
      console.log('Computer Wins: Paper covers Rock!');
      console.log('The current Human Score is:', humanScore);
      console.log('The current Computer Score is:', computerScore);
      return;
    } else if (humanSelection == 'rock' && computerSelection == 'scissors') {
      humanScore = ++humanScore;
      console.log('Human Wins: Rock smashes Scissors!');
      console.log('The current Human Score is:', humanScore);
      console.log('The current Computer Score is:', computerScore);
      return;
    } else if (humanSelection == 'paper' && computerSelection == 'paper') {
      console.log('paper vs paper = Tie! Play again');
      console.log('The current Human Score is:', humanScore);
      console.log('The current Computer Score is:', computerScore);
      return playRound();
    } else if (humanSelection == 'paper' && computerSelection == 'rock') {
      humanScore = ++humanScore;
      console.log('Human Wins: Paper covers Rock!');
      console.log('The current Human Score is:', humanScore);
      console.log('The current Computer Score is:', computerScore);
      return;
    } else if (humanSelection == 'paper' && computerSelection == 'scissors') {
      computerScore = ++computerScore;
      console.log('Computer Wins: Scissors cuts Paper!');
      console.log('The current Human Score is:', humanScore);
      console.log('The current Computer Score is:', computerScore);
      return;
    } else if (
      humanSelection == 'scissors' &&
      computerSelection == 'scissors'
    ) {
      console.log('Scissors vs Scissors = Tie! Play again');
      console.log('The current Human Score is:', humanScore);
      console.log('The current Computer Score is:', computerScore);
      return playRound();
    } else if (humanSelection == 'scissors' && computerSelection == 'rock') {
      computerScore = ++computerScore;
      console.log('Computer Wins: Rock smashes Scissors!');
      console.log('The current Human Score is:', humanScore);
      console.log('The current Computer Score is:', computerScore);
      return;
    } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
      humanScore = ++humanScore;
      console.log('Human Wins: Scissors cuts Paper!');
      console.log('The current Human Score is:', humanScore);
      console.log('The current Computer Score is:', computerScore);
      return;
    }

    // Displays updated Score after the round has finished
    console.log('The current Human Score is:', humanScore);
    console.log('The current Computer Score is:', computerScore);
  }

  // Plays 5 rounds
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  // Calculates and displays game winner after 5 rounds
  if (humanScore > computerScore) {
    console.log(
      'Human wins! With a final score of',
      humanScore,
      'to',
      computerScore
    );
    return;
  } else {
    console.log(
      'Computer Wins! With a final score of',
      computerScore,
      'to',
      humanScore
    );
    return;
  }
}

// Calls the playGame Function
playGame();

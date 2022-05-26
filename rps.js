
// Function to randomly generate computer game entries
function computerplay() {
  returnGameValue = Math.floor(Math.random() * 3);
  if (randomGameValue == "0") {
    return "rock";
  }
  else if (randomGameValue == "1") {
    return "paper";
  }
  else {
    return "scissor";
    
  } 
}

// Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  let log = '';

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      log = 'You Lose! Paper beats Rock';
    } else if (computerSelection === 'Scissors') {
      log = 'You Win! Rock beats Scissors';
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      log = 'You Lose! Scissors beats Paper';
    } else if (computerSelection === 'Rock') {
      log = 'You Win! Paper beats Rock';
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      log = 'You Lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper') {
      log = 'You Win! Scissors beats Paper';
    } else {
      log = "It's a tie";
    }
  }

  return log;
}

function game(playerSelect) {
  let playerSelection = capitalize(playerSelect);
  let computerSelection = getComputerSelection();

  let roundResult = playRound(playerSelection, computerSelection);

  if (roundResult.search('You Win!') > -1) {
    playerScore++;
  } else if (roundResult.search('You Lose!') > -1) {
    computerScore++;
  }

  scorePlayer.textContent = playerScore;
  scoreComputer.textContent = computerScore;
  message.textContent = roundResult;
  selectionPlayer.appendChild(createParagWithText(playerSelection));
  selectionComputer.appendChild(createParagWithText(computerSelection));

  if (playerScore >= 5 && computerScore < 5) {
    message.textContent = 'Game Over. You Win!';
  } else if (playerScore < 5 && computerScore >= 5) {
    message.textContent = 'Game Over. You Lose!';
  }
}


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


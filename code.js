const selections = ["rock", "paper", "scissors"];
let playerSelection = ""; //prompt("Rock, Paper or Scissors?").toLowerCase();

function computerPlay() {
  return selections[Math.floor(Math.random() * selections.length)];
}
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

  if (computerSelection == "rock" && playerSelection == "paper") {
    return "You win!";
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    return "You win!";
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    return "You win!";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "You lose!";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    return "You lose!";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    return "You lose!";
  } else if (computerSelection == playerSelection) {
    return "It's a tie";
  } else {
    return "You must enter rock, paper or scissors";
  }
}

let playerWins = 0;
let computerWins = 0;
let ties = 0;

function game() {

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase(); // user enter pick
    computerSelection = computerPlay(); // computer repick

    if (playRound(playerSelection, computerSelection) == "You win!") {
      playerWins = ++playerWins;
      alert(playerSelection + " beats " + computerSelection);
    } else if (playRound(playerSelection, computerSelection) == "You lose!") {
      computerWins = ++computerWins;
      alert(playerSelection + " loses to " + computerSelection);
    } else if (playRound(playerSelection, computerSelection) == "You must enter rock, paper or scissors") {
      i--; 
      alert("You must enter rock, paper or scissors");
    } else {
      ties = ++ties;
      alert(playerSelection + " ties with " + computerSelection);
    }

    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playerWins);
    console.log(computerWins);
    console.log(ties);
  }

  if (playerWins > computerWins) {
    alert("Winner"); //return "Winner!";
  } else if (computerWins > playerWins) {
    alert("Loser"); //return "Loser!";
  } else {
    alert("Tie"); //return "Tie!";
  }
}  

console.log(game());


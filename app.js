console.log("Rock, Paper, Scissors");

const myArray = ["rock", "paper", "scissors"];

function computerPlay() {
	return myArray[Math.floor(Math.random() * myArray.length)];
}

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerPlay().toLowerCase();

	if (playerSelection == computerSelection) {
		return `Tie game.`;
	} else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissors" && computerSelection == "paper")
	) {
		return `You win, ${playerSelection} beats ${computerSelection}!`;
	} else {
		return `You lose, ${computerSelection} beats ${playerSelection}!`;
	}
}

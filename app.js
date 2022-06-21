console.log("Rock, Paper, Scissors");

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
	return myArray[Math.floor(Math.random() * myArray.length)];
}

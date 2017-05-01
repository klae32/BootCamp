// Create secretNumber
var secretNumber= 4;
//Ask User for Guess
var guess = Number(prompt("Guess a number"));

//var guess= prompt("What number am I thinking of?");
//check guess
/*if (guess> secretNumber){
	console.log("That guess is too high!");
	alert("That guess is too high!");
}
else if(guess < secretNumber){
	console.log("That guess is too low");
	alert("That guess is too low");
}
else{
	console.log("You guessed it");
	alert("You guessed it");
} */

if (guess=== secretNumber){
	alert("YOU GOT IT RIGHT!");
}
else if (guess >secretNumber){
	alert("Too high. Guess again!");
}
else{
	alert("Too low. Guess again!");
}
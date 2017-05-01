

// var age = prompt("How old are you?");

// if((age%2)>0){
// 	alert("Your age is odd!")
// }

// else if (age <0){
// 	alert("An Error has occured. Age must be a positive number");
// }
// else if (age<18){ 
// console.log("Sorry, you are not old enough to enter the Venue.")
// 	}
	
// else if(age<21){
// 	console.log("You can enter the Venue but cannot Drink")
// }
// else if(age == 21){
// 		alert("Happy 21st Birthday!")
// 	}
// else{
// 	console.log("Come on in. You can Drink")
// }

/*I totally got them all right, but I thought they
 had to get all of the previous stuff as well as
  the new stuff lol. */

// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));
 
// If age is negative
if(age < 0) {
 console.log("Come back once you're out of the womb");
}
 
// If age is 21  
if(age === 21) {
 console.log("Happy 21st Birthday!");
}
 
// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 console.log("Your age is odd!");
}
 
// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
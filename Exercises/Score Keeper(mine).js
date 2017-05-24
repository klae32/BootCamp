


var player1 = document.querySelector("#sc1");
var player2 = document.getElementById("sc2");
var reset = document.querySelector("#r");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var playTo = 5;

player1.addEventListener("click", function p1Scored(){
	if(p1Score <5){p1Score++;}
	if(p1Score === 5){
		document.querySelector("#p1").style.color = "green"
	}
	var scored = document.querySelector("#p1")
	scored.textContent = p1Score
});

player2.addEventListener("click", function p2Scored(){
	if(p2Score <5){p2Score++;}
	if(p2Score === 5){
		document.querySelector("#p2").style.color = "green"
	}
	var scored = document.querySelector("#p2")
	scored.textContent = p2Score
});

reset.addEventListener("click", function re(){
	p1Score = 0;
	p2Score = 0;

		document.querySelectorAll(".reset").style.color = "black"
	});
	
var colors= generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
function pickColor(){
	var random = Math.floor(Math.random()*colors.length)
return colors[random]
}


for(var i=0; i<squares.length; i++){
 squares[i].style.backgroundColor = colors[i];
 squares[i].addEventListener("click", function(){
	var clickedColor = this.style.backgroundColor;
	if(clickedColor=== pickedColor){
		for(var i=0; i<squares.length; i++){
squares[i].style.backgroundColor = pickedColor;}
h1.style.backgroundColor = pickedColor
	messageDisplay.textContent = "Correct";
	} 
	else {this.style.backgroundColor = "#232323"
		messageDisplay.textContent = "Try Again";}
	});
}

function generateRandomColors (num) {
//make array
var arr = [];
//add hum random colors to array
for(var i=0; i<num; i++){
arr.push(getColor());
}
//return that array
return arr;
}

function getColor(){
	var r = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256)
return "rgb(" + r + ", " + g + ", " + b + ")" ; 

}


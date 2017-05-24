
// window.onload= function(){
// var buttons = document.querySelector("button");


// buttons.addEventListener("click", function(){
// 	var bg = document.body.style.background 

// if(bg === "purple")
// {bg = "white"};
// // else if(bg === "white"){bg = "red";}
// // else if(bg === "red"){bg = "orange";}
// // else if(bg === "orange"){bg = "green";}
// else{document.body.style.background = "white"}

// });

// // var button = document.querySelector("button");

// // button.addEventListener("click", function(){
// // alert("clicked");

// // });

// }

window.onload= function(){
var buttons = document.querySelector("button");


buttons.addEventListener("click", function(){
	var bg = document.body.style.background 

if(document.body.style.background === "purple")
{document.body.style.background = "white"}
else if(document.body.style.background === "white"){document.body.style.background = "red";}
else if(document.body.style.background === "red"){document.body.style.background = "orange";}
else if(document.body.style.background === "orange"){document.body.style.background = "green";}
else{document.body.style.background = "purple"}

});

// var button = document.querySelector("button");

// button.addEventListener("click", function(){
// alert("clicked");

// });

}

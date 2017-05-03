var todos =["Buy new turtle"];
var input = prompt("What would you like todo?")


while(input!== "quit"){

	if(input === "list"){
		todos.forEach(function(todo, index){
	
	console.log(index + ": " + todos);
});
		}
	else if(input === "new"){
	var newTodo = prompt("Enter new todo")
todos.push(newTodo);
	}
	// else if(input ==="delete"){
	// var delete = todos.indexOf(input);
	// var deleted = todos.slice(delete, (delete+1));
	// }
	input = prompt("What would you like to do?")
}
console.log("OK, YOU QUIT THE APP")
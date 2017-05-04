var todos =["Buy new turtle"];
var input = prompt("What would you like todo?")


while(input!== "quit"){

	if(input === "list"){
		
	listTodos();
		}
	else if(input === "new"){
	addTodos();
	}

	else if(input ==="delete"){
	deleteTodo();
	}
	input = prompt("What would you like to do?")
}
console.log("OK, YOU QUIT THE APP")

function listTodos(){
	console.log("**********");
		todos.forEach(function(todo, index){
		console.log(index + ": " + todos);
		console.log("**********");})
	}

function addTodos(){
var newTodo = prompt("Enter new todo")
	todos.push(newTodo);
	var last = todos[(todos.length-1)];
	console.log(last + " added to list");
}

function deleteTodo() {
var index=prompt("Enter index of todo to delete");
	var deleted=todos.splice(index, 1)
	console.log(deleted + " has been deleted");}
// isEven
function isEven(num){
	if(num%2 === 0){
		return true;
	}
	else {return false;}
}
//factorial
function factorial(num){
	if (num === 0){
		return 1;
	}
	return num *factorial(num-1);

}

//kebabToSnake

function kebabToSnake(str){
var result = str.replace("-", "_");
return result;
}
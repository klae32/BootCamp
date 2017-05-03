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

function factorial2(num){
	var result = 1;
	for (i=2; i<= num; i++){
		result*= i;
	}
	return result;
}
function factorial3(num){
	if (num===0){
		return 1;
	}
	var result = num;
	for(i =num-1; i>= 1; i--){
		result *=i;
	}
	return result
}

//kebabToSnake

function kebabToSnake(str){
var result = str.replace("-", "_");
return result;


//str.replace(/-/g , "_");
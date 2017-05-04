// My Answer

// function printReverse(arr){
// var rev = arr.reverse();
// rev.forEach(function(i){
// console.log(i);
// })

// }

//His answer
function printReverse(arr){
for (var i = arr.length - 1; i>=0; i--){
	console.log(arr[i]);
}

}

// My Answer
// function isUniform(arr){
// 	for(i=0; i<arr.length; i++){
// 		if (arr[0]!==arr[i]){
// 			return false;}
// 		}
// 		return true;
// 	}

//His answer
function isUniform(arr){
	var first = arr[0];
	for(i=0; i<arr.length; i++){
		if (arr[i]!==first){
			return false;}
		}
		return true;
	}

//** first attempt- couldn't figure out what went wrong.
// function sumArray(arr){
// results = 0;
// for(i=0;i<arr.length;i++){
// arr[i] +results= results
// }
// return results;
// }

// My Answer
// function sumArray(arr){
// var results = 0;
// for(i=0;i<arr.length;i++){
// results = results + arr[i];
// }
//  return results
// }

//His Answer
function sumArray(arr){
var total = 0;
arr.forEach(function(e){
	total+= e;
});
return total;
}


// My Answer
// function max(arr){
// var sort = arr.sort(function(a, b){return b-a});
// var answer=sort[0];
// return answer;
// }

function max(arr){
	var max = arr[0];
for (i=1; i < arr.length; i++){
	if(arr[i] > max){
		max = arr[i];
	}
}
return max;
}
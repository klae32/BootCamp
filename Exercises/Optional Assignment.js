var colors = ["red" , "orange" ,"yellow", "green"];

// colors.forEach(function (color){

// 	console.log(color);
// })

function myForEach(arr,func){
//loop through array
for(i=0; i<arr.length; i++){

//call func for each item in array
func(arr[i])	
}
}
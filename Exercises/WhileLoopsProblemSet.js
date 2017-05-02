console.log("Print all numbers between -10 and 19")
var anum =-10
while (anum <=19){
	console.log(anum);
	anum++;
}
console.log( "Print all even Numbers between 10 and 40");
var evnum = 10
while(evnum <=40){
	console.log(evnum);
	evnum+=2;
}
console.log("Print all odd numbers between 300 and 333");
var onum = 301
while(onum<=333){
	console.log(onum);
	onum+=2;
}
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
var dnum = 5
while(dnum<=50){
	if(dnum % 3===0 && dnum %5===0){
		console.log(dnum)}
		dnum++;
}

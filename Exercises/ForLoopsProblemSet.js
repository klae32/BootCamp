console.log("Print all numbers between -10 and 19")
// var anum =-10
// while (anum <=19){
// 	console.log(anum);
// 	anum++;}

for (i=-10; i<=19;i++){
	console.log(i);
}

console.log( "Print all even Numbers between 10 and 40");
// var evnum = 10
// while(evnum <=40){
// 	console.log(evnum);
// 	evnum+=2;
// }
for (i=10; i<= 40; i++){
	if(i %2 ===0){
		console.log(i)
	}
}

console.log("Print all odd numbers between 300 and 333");
// var onum = 300
// while(onum<=333){
// 	if (onum %2!==0){
// 	console.log(onum);}
// 	onum+=1;
// }
for (i=300; i<= 333; i++){
	if(i %2 !==0){
		console.log(i)
	}
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
// var dnum = 5
// while(dnum<=50){
// 	if(dnum % 3===0 && dnum %5===0){
// 		console.log(dnum)}
// 		dnum++;
// }
for (i=5; i<= 50; i++){
	if(i %3 ===0 && i%5===0){
		console.log(i)
	}
}


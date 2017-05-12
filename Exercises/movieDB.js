

movies =[
{title: "Remember the Titans",
rating: 5,
watched: true 
},
{title: "Ride Along",
rating: 5,
watched: true 
},
{title: "Mad Max Fury Road",
rating: 2.5,
watched: false 
},
{title: "Rain Man",
rating: 2.5,
watched: false 
},
{title: "Captain Underpants",
rating: 5,
watched: false

}
]

//First Answer vvvvvvvv
// movies.forEach(function(movie){
// var results ="You have "
// if (movie.watched){
// 	results += "watched";
// }
// else {
// 	results += "not seen ";

// }
// results+= "\"" + movie.title + "\" - "
// results+= movie.rating + " stars"
// console.log( results)

// })

//Refactored answer  vvvvvv
// function buildString(movie){
// var results ="You have "
// if (movie.watched){
// 	results += "watched";
// }
// else {
// 	results += "not seen";

// }
// results+= "\"" + movie.title + "\" - "
// results+= movie.rating + " stars"	
// return results
// }

// movies.forEach(function(movie){
// console.log( buildString(movie))

// })
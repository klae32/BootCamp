
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
$(this).parent().fadeOut(750, function(){
	$(this).remove();
});
event.stopPropagation();

});

$("input[type= 'text']").keypress(function(event){
if(event.which === 13){
var todoText = $(this).val();
$(this).val("");
$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>");
}

});

$(".fa-plus").click(function(){
	$("input").fadeToggle(200);
});

$(document).keypress(function(e){
	if(e.which === 45){
		$(".completed").remove();
	}
});
$(document).keypress(function(e){
	if(e.which === 61){
	$("input").fadeToggle(200);
}
	
});

// $(document).keypress(function(event){
//   alert(event.which); 
// });
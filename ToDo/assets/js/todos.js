$("input[type='text']").fadeToggle();

//Click to indicate the task is done
$("ul").on("click", "li", function(){
$(this).toggleClass("completed")})


//Click Trash Can to eliminate
$("ul").on("click", "span", function(event){
$(this).parent().fadeOut(500, function(){
	$(this).remove();} )
 event.stopPropagation();
});

//introduce text
$("input[type='text']").keypress(function(event){
if (event.which===13){
	var todoText= $(this).val();

	//create a new li
	$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText+ "</li>");
}
});

//Hide or Unhide the "+" sign
$(".fa-plus").click(function (){
	$("input[type='text']").fadeToggle();
})